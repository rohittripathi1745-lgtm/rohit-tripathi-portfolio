import { useState, createContext, useContext, ReactNode } from 'react';

interface CursorContextType {
  cursorText: string;
  setCursorText: (text: string) => void;
  cursorVariant: 'default' | 'hover' | 'project' | 'hidden';
  setCursorVariant: (variant: 'default' | 'hover' | 'project' | 'hidden') => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorText: '',
  setCursorText: () => {},
  cursorVariant: 'default',
  setCursorVariant: () => {},
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'hidden'>('default');

  return (
    <CursorContext.Provider value={{ cursorText, setCursorText, cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
