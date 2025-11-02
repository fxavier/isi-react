import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { BusinessLines } from './sections/BusinessLines';
import { Clients } from './sections/Clients';
import { Contacts } from './sections/Contacts';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BusinessLines />
        <Clients />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;