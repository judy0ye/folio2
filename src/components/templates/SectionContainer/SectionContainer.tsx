import { ReactNode } from 'react';
import classes from './SectionContainer.module.css';

type SectionContainerProps = {
  children: ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <div className={classes.sectionContainer}>{children}</div>;
};
