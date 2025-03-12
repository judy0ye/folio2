import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import classes from './page.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
