import { Header } from '../components/Header';
import { Hero } from '../components/Landing-page/Hero';
import { About } from '../components/Landing-page/About';
import { Services } from '../components/Landing-page/Services';
import { Booking } from '../components/Landing-page/Booking';
import { Gallery } from '../components/Landing-page/Gallery';
import { FAQ } from '../components/Landing-page/FAQ';
import { AppointmentForm } from '../components/Landing-page/Appointment';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Landing-page/Testimonials';
import { useInitData } from '../hooks/useInitData';

function App() {

  useInitData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <FAQ />
      <Testimonials />
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default App;