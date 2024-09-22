declare module 'react-mathjax' {
  import { ReactNode } from 'react';

  interface MathJaxContextProps {
    children: ReactNode;
  }

  interface MathJaxNodeProps {
    formula: string;
    inline?: boolean;
  }

  export const Provider: React.FC<MathJaxContextProps>;
  export const Node: React.FC<MathJaxNodeProps>;
}
