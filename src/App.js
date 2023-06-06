import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <Skills />
    </main>
    </>
  );
}

export default App;
