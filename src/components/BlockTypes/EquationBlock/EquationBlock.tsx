import React from 'react';
import FormulaRenderer from '../../FormulaRenderer/FormulaRenderer';
import { css } from '@emotion/react';

interface IEquationBlockProps {
  value: any;
}

const EquationBlock: React.FC<IEquationBlockProps> = ({ value }) => {
  const {
    properties: {
      title: [[formulaValue]],
    },
  } = value;

  return (
    <div css={EquationBlockStyles}>
      <FormulaRenderer formula={formulaValue} />
    </div>
  );
};

export default EquationBlock;

const EquationBlockStyles = css`
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #262626;
  }
`;
