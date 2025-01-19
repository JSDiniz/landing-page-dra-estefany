import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Booking } from '../components/Booking';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { AppointmentForm } from '../components/Appointment';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Booking/>
      <Gallery />
      <FAQ />
      <Testimonials/>
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default App;