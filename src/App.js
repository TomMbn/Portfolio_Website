import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <Skills />
      <Contact/>
    </main>
    </>
  );
}

export default App;
