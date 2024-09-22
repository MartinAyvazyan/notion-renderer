import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

interface IBulletedListWrapperProps {
  children: ReactNode;
}

const BulletedListWrapper: React.FC<IBulletedListWrapperProps> = ({
  children,
}) => {
  return <div css={BulletedListWrapperStyles}>{children}</div>;
};

export default BulletedListWrapper;

const BulletedListWrapperStyles = css`
  padding: 3px 2px;
  line-height: 24px;
  > ul {
    margin: 0;
  }
`;
