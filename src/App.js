import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Work from './components/project/Work';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <Skills />
      <Work />
      <Contact/>
    </main>
    </>
  );
}

export default App;
