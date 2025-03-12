'use client';
import { Canvas } from '@react-three/fiber';
import classes from './Hero.module.css';
import {
  Cloud,
  Clouds,
  PerspectiveCamera,
  Stars,
  useProgress
} from '@react-three/drei';

import JsPlane from '@/components/models/JsPlane';
import Desk from '@/components/models/Desk';
import Laptop from '@/components/models/Laptop';
import Cat from '@/components/models/Cat';
import { Container } from '@/components/templates/Container/Container';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useEffect, useRef, useState } from 'react';
import LoaderScreen from '@/components/LoaderScreen';
import CursorFollowGrp from '@/components/CursorFollowGrp';
import Avatar from '@/components/models/Avatar';

export const Hero = () => {
  const heroPageHeadingRef = useRef(null);
  const heroSectionHeadingRef = useRef(null);
  const paraRef = useRef(null);
  const sectionRef = useRef(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modelProps, setModelProps] = useState<{
    position: [number, number, number];
    scale: number;
  } | null>(null);
  const { active, progress } = useProgress();

  useGSAP(
    () => {
      if (!loaderRef.current) return;
      
      if (progress === 100 && !active) {
        gsap.timeline().to(loaderRef.current, {
          opacity: 0,
          ease: 'power2.inOut',
          onComplete: () => setIsLoading(false)
        });
      }
    },
    { dependencies: [progress], scope: sectionRef }
  );

  const getModelProps = () => ({
    position: [
      window.innerWidth >= 1281 || window.innerHeight <= 450 ? 1.85 : -1,
      0,
      0
    ] as [number, number, number],
    scale: window.innerWidth >= 1440 ? 0.6 : 0.5
  });

  useEffect(() => {
    setModelProps(getModelProps());

    const handleResize = () => setModelProps(getModelProps());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isLoading && <LoaderScreen progress={progress} loaderRef={loaderRef} />}
      <section id="home" ref={sectionRef} className={classes.heroWrapper}>
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'visible'
          }}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <PerspectiveCamera
            makeDefault
            position={[-1, 0, 7]}
            near={0.005}
            far={5000}
          />
          <directionalLight position={[5, 10, 5]} intensity={3} />
          <ambientLight intensity={2} />
          <Suspense>
            <CursorFollowGrp>
              <group
                scale={modelProps?.scale}
                position={modelProps?.position}
                rotation={[0, -0.5, 0]}>
                <JsPlane />
                <group scale={1.2} position={[0, 0.25, -1.7]}>
                  <Avatar />
                  <Desk />
                  <Laptop />
                  <Cat />
                </group>
                <Clouds>
                  <Cloud
                    scale={0.7}
                    segments={35}
                    bounds={[5, -0.5, 2]}
                    volume={3}
                    color="white"
                    seed={2}
                    growth={1}
                    speed={0.5}
                    position={[0.5, -3, -1]}
                  />
                  <Cloud
                    scale={0.7}
                    bounds={[1, -0.1, 5]}
                    volume={3}
                    color="aliceblue"
                    seed={6}
                    growth={1}
                    speed={0.5}
                    position={[0.5, -3, 0]}
                  />
                </Clouds>
              </group>
            </CursorFollowGrp>
          </Suspense>
        </Canvas>
        <Container>
          <div className={classes.hero}>
            <div className={classes.heroText}>
              <h1 ref={heroPageHeadingRef} className={classes.pageHeading}>
                Hi, I&apos;m Judy Ye
              </h1>
              <h2
                ref={heroSectionHeadingRef}
                className={classes.sectionHeading}>
                Frontend Software Developer
              </h2>
              <h3 className={classes.h3} ref={paraRef}>
                Creating pixel perfect, user friendly interfaces
              </h3>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
