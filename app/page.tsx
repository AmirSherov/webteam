import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Team from './components/Team';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/global.scss';

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Team />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
