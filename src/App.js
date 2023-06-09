import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Work from './components/project/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <Skills />
      <Work />
      <Contact/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
