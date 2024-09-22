import React from 'react';
import { css } from '@emotion/react';

interface ICalloutBlockProps {
  value: any;
}

const CalloutBlock: React.FC<ICalloutBlockProps> = ({ value }) => {
  const {
    format: { page_icon },
    properties: { title },
  } = value;
  return (
    <div css={CalloutBlockStyles}>
      <span>{page_icon}</span>
      <div>{title}</div>
    </div>
  );
};

export default CalloutBlock;

const CalloutBlockStyles = css`
  display: flex;
  align-items: flex-start;
  white-space: pre;
  padding: 16px 16px 16px 12px;
  border-radius: 4px;
  background-color: #202020;
  line-height: 24px;
  > span {
    font-size: 20px;
  }
  > div {
    margin-left: 8px;
  }
`;
