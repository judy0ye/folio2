import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateText = (
  headings: HTMLElement[],
  content: HTMLDivElement,
  section: HTMLElement
) => {
  const mm = gsap.matchMedia();

  mm.add(
    {
      noPrefMotion: '(prefers-reduced-motion: no-preference)'
    },
    () => {
      gsap.fromTo(
        headings,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          ease: 'expo.inOut',
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'center 85%'
          }
        }
      );
      gsap.fromTo(
        content,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'expo.inOut',
          duration: 1.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'center 65%'
          }
        }
      );
    }
  );
};
