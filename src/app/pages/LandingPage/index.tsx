
import { Hero } from '../../../components/Landing-page/Hero';
import { About } from '../../../components/Landing-page/About';
import { Services } from '../../../components/Landing-page/Services';
import { Booking } from '../../../components/Landing-page/Booking';
import { Gallery } from '../../../components/Landing-page/Gallery';
import { FAQ } from '../../../components/Landing-page/FAQ';
import { AppointmentForm } from '../../../components/Landing-page/Appointment';
import { Testimonials } from '../../../components/Landing-page/Testimonials';

function LandingPage() {

    return (
        <>
            <Hero />
            <About />
            <Services />
            <Booking />
            <Gallery />
            <FAQ />
            <Testimonials />
            <AppointmentForm />
        </>
    );
}

export default LandingPage;