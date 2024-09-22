import React from 'react';
import MathJax from 'react-mathjax';

interface IFormulaRenderer {
  inline?: boolean;
  formula: string;
}

const FormulaRenderer: React.FC<IFormulaRenderer> = ({ inline, formula }) => {
  return (
    <MathJax.Provider>
      <MathJax.Node inline={inline} formula={formula} />
    </MathJax.Provider>
  );
};

export default FormulaRenderer;
