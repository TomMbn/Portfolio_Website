import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { LanguageProvider } from './contexts/LanguageContext';
import Skeleton from './components/common/Skeleton';

// Lazy load non-critical sections
const Skills = lazy(() => import('./components/skills/Skills'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Work = lazy(() => import('./components/project/Work'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

const App = () => {
  return (
    <LanguageProvider>
      <Header />

      <main className='main'>
        <Home />
        <Suspense fallback={<Skeleton />}>
          <Skills />
          <Experience />
          <Work />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </LanguageProvider>
  );
}

export default App;

