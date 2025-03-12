'use client';
import { IconCopyright } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Container from '../templates/Container';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const sectionRef = useRef(null!);
  const { progress } = useProgress();

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 100%',
            end: 'bottom 100%'
          }
        }
      );
    },
    { dependencies: [progress], scope: sectionRef }
  );

  return (
    progress === 100 && (
      <footer ref={sectionRef} className={classes.footer}>
        <Container>
          <div className={classes.textWrapper}>
            <p>Handmade by Judy Ye</p>
            <IconCopyright />
            <p>{new Date().getFullYear()}</p>
          </div>
        </Container>
      </footer>
    )
  );
};
