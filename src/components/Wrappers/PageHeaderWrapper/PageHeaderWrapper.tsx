import React from 'react';
import { css } from '@emotion/react';

interface PageHeaderWrapperProps {
  children: React.ReactNode;
}

const PageHeaderWrapper: React.FC<PageHeaderWrapperProps> = ({ children }) => {
  return <div css={PageHeaderWrapperProps}>{children}</div>;
};

export default PageHeaderWrapper;

const PageHeaderWrapperProps = css`
  > header {
    position: fixed;
  }
`;
