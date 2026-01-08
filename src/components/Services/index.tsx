import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Url from '/logo.svg';
import Vector from './../../assets/Services/vector.svg';

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../../mocks/services';

export const Services = () => {
  const [select, setSelect] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  }, [
    Autoplay({ delay: 30000, playOnInit: true })
  ])

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setSelect(selectedIndex);
    };

    emblaApi.on('select', onSelect);

    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0)
    }
  }, [emblaApi])

  const handleClick = (index: number) => {
    setSelect(index)
    emblaApi?.scrollTo(index)
    const autoplay = emblaApi?.plugins().autoplay;
    autoplay?.reset();
    autoplay?.play();
  }

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Nossos Serviços
          </h2>

          <div className="grid grid-rows-1 grid-flow-col gap-1 items-center justify-center">
            <span className="w-11 h-[2px] bg-fuchsia-700" />
            <img src={Url} alt="" className="w-6 h-6" />
            <span className="w-11 h-[2px] bg-fuchsia-700" />
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços odontológicos para cuidar do seu sorriso.
          </p>
        </motion.div>

        <div className="mt-16">

          <div className='w-full relative'>
            <div className='w-full overflow-x-hidden' ref={emblaRef}>
              <div className='flex'>

                {SERVICES.map((service, index) => (
                  <div
                    className="h-32 px-1 flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/5)]"
                    key={index}
                    role="button"
                    onClick={() => handleClick(index)}
                  >
                    <div style={{ backgroundColor: service.cor }} className="h-28 rounded-xl flex flex-col gap-2 items-center justify-center relative" >
                      <span className="text-gray-900 text-xl">
                        {service.icon}
                      </span>
                      <h3 className="text-base font-semibold text-gray-900 line-clamp-2 select-none">
                        {service.title}
                      </h3>

                      {index === select && (
                        <span style={{ backgroundColor: service.cor }} className="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2 w-5 h-5 rotate-45 z-50"></span>
                      )}
                    </div>

                  </div>
                ))}
              </div>

            </div>


            <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2' onClick={scrollPrev}>
              <ChevronLeft className='w-6 h-6 text-gray-600' />
            </button>


            <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-8 -translate-y-1/2 -translate-x-1/2 top-1/2' onClick={scrollNext}>
              <ChevronRight className='w-6 h-6 text-gray-600' />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:flex md:gap-12 md:justify-center md:items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[505px] mx-auto relative flex justify-center items-center">
              <img src={`${SERVICES[select].content?.url}`} alt="" className="w-full h-full object-contain z-10" />
              <img src={Vector} alt="" className="absolute bottom-5 -right-4 rotate-45 h-[35%] opacity-40" />
              <img src={Vector} alt="" className="absolute top-0 -left-4 rotate-45 h-[35%] opacity-40" />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full grid grid-rows gap-4">
              <h3 className="font-semibold text-3xl text-gray-900">
                {SERVICES[select].content?.title}
              </h3>
              <h4 className="font-semibold text-gray-900">
                {SERVICES[select].content?.subTitle}
              </h4>
              <p className="font-semibold text-base text-gray-600">
                {SERVICES[select].content?.paragraph_1}
              </p>
              {SERVICES[select].content?.paragraph_2 && (
                <p className="font-semibold text-base text-gray-600">
                  {SERVICES[select].content?.paragraph_2}
                </p>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};