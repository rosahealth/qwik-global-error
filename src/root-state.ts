import { createContext, useContext } from '@builder.io/qwik';

export interface RootState {
  title: string;
  description: string;
}

export const ROOTSTATE = createContext<RootState>('Rootstate');
export const useRootState = () => useContext(ROOTSTATE);
