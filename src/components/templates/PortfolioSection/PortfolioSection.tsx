'use client';
import SectionContainer from '../SectionContainer';
import classes from './PortfolioSection.module.css';
import { useGSAP } from '@gsap/react';
import { animateText } from '@/utils/helpers';
import { useRef } from 'react';
import { useProgress } from '@react-three/drei';
import type { PortfolioSectionProps } from './PortfolioSection.types';

export const PortfolioSection = ({
  title,
  headline,
  children
}: PortfolioSectionProps) => {
  const { progress } = useProgress();
  const titleRef = useRef(null!);
  const sectionRef = useRef(null!);
  const contentRef = useRef(null!);
  const headlineRef = useRef(null!);

  useGSAP(
    () => {
      if (
        !titleRef.current ||
        !headlineRef.current ||
        !contentRef.current ||
        !sectionRef.current
      )
        return;

      animateText(
        [titleRef.current, headlineRef.current],
        contentRef.current,
        sectionRef.current
      );
    },
    { dependencies: [progress], scope: sectionRef }
  );

  return (
    progress === 100 && (
      <section
        ref={sectionRef}
        id={`${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <SectionContainer>
          <h2
            ref={titleRef}
            className={
              title === 'Projects' ? classes.lightTitle : classes.title
            }>
            {title}
          </h2>
          <div
            className={
              title === 'Projects' ? classes.lightDivider : classes.divider
            }></div>
          <p
            ref={headlineRef}
            className={
              title === 'Projects' ? classes.lightHeadline : classes.headline
            }>
            {headline}
          </p>

          <div ref={contentRef} className={classes.contentWrapper}>
            {children}
          </div>
        </SectionContainer>
      </section>
    )
  );
};
