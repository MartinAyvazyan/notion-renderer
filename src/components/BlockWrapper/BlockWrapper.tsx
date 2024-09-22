import React from 'react';
import TextBlock from '../BlockTypes/TextBlock/TextBlock';
import CodeBlock from '../BlockTypes/CodeBlock/CodeBlock';

interface IBlockWrapperProps {
  data: { value: { type: 'text' | 'code' } };
}

const BlockTypeMapping = {
  text: TextBlock,
  code: CodeBlock,
};

const BlockWrapper: React.FC<IBlockWrapperProps> = ({ data }) => {
  const { value } = data;

  const Block: React.FC<{ value: any }> = BlockTypeMapping[value.type];

  return <Block value={value} />;
};

export default BlockWrapper;
