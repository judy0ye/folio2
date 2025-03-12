import { ReactNode } from 'react';
import classes from './Container.module.css';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className={classes.container}>{children}</div>;
};
