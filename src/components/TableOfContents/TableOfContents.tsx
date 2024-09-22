import React from 'react';
import { css } from '@emotion/react';

interface ITableOfContentsProps {
  blockMap: any;
}

const TableOfContentsStyles = css`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
`;

const TableOfContents: React.FC<ITableOfContentsProps> = ({ blockMap }) => {
  const tableOfContent = Object.values(blockMap).filter(
    ({ value: { type } }: any) =>
      type === 'header' || type === 'sub_header' || type === 'sub_sub_header',
  );

  return (
    <div css={TableOfContentsStyles}>
      {tableOfContent.map(
        ({
          value: {
            id,
            type,
            properties: { title },
          },
        }: any) => {
          return (
            <div css={TableOfContentItem} key={id}>
              <a href={`#${id}`} className={type}>
                {title}
              </a>
            </div>
          );
        },
      )}
    </div>
  );
};

const TableOfContentItem = css`
  padding: 6px 2px;
  font-size: 14px;
  line-height: 1.3;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    background-color: #ffffff0e;
  }
  > a {
    &.sub_header {
      margin-left: 24px;
    }
    &.sub_sub_header {
      margin-left: 48px;
    }
  }
`;

export default TableOfContents;
