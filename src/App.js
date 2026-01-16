import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Work from './components/project/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { LanguageProvider } from './contexts/LanguageContext';


const App = () => {
  return (
    <LanguageProvider>
      <Header />

      <main className='main'>
        <Home />
        <Skills />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;

