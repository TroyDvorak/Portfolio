import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Tech, Navbar, Chatbot, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Stars background for the whole app */}
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <Chatbot />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
