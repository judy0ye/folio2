import { RefObject } from 'react';

export interface LoaderScreenProps  {
  progress: number;
  loaderRef: RefObject<HTMLDivElement | null>;
}
