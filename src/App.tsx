import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Hero />
          <Languages />
          <Features />
          <UseCases />
          <AboutUs />
          <Services />
          <HowItWorks />
          <Contact />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
