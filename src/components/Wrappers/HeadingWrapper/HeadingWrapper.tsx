import React, { useState } from 'react';
import ChevronIcon from '../../../assests/chevron.svg';
import { css } from '@emotion/react';
import BlockWrapper from '../../BlockWrapper/BlockWrapper';

interface IHeaderComponentProps {
  children: React.ReactNode;
  blockValue: any;
  blockMap: any;
}

const HeadingWrapper: React.FC<IHeaderComponentProps> = ({
  children,
  blockValue,
  blockMap,
}) => {
  const {
    id,
    format: { toggleable },
    content,
  } = blockValue;

  const [showContent, setShowContent] = useState(!toggleable);

  return (
    <div css={HeaderStyles} id={id}>
      {toggleable && (
        <img
          src={ChevronIcon}
          className={showContent ? 'showContent' : ''}
          onClick={() => setShowContent(!showContent)}
          alt="Show content"
        />
      )}
      <div css={HeaderContentWrapper}>
        {children}
        {toggleable && showContent && content.length && (
          <div>
            {content.map((id: string) => {
              const data = blockMap[id];
              return <BlockWrapper key={id} data={data} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadingWrapper;

const HeaderStyles = css`
  display: flex;
  align-items: baseline;
  > img {
    cursor: pointer;
    width: 11px;
    height: 11px;
    padding: 6px;
    margin-right: 4px;
    border-radius: 4px;
    :hover {
      background: rgba(255, 255, 255, 0.055);
    }
    &.showContent {
      transform: rotate(90deg);
    }
  }
`;

const HeaderContentWrapper = css`
  display: block;
  flex-direction: column;
`;
