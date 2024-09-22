import React, { useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import HeadingWrapper from './Wrappers/HeadingWrapper/HeadingWrapper';
import CodeBlock from './BlockTypes/CodeBlock/CodeBlock';
import CalloutBlock from './BlockTypes/CalloutBlock/CalloutBlock';
import TextBlock from './BlockTypes/TextBlock/TextBlock';
import EquationBlock from './BlockTypes/EquationBlock/EquationBlock';
import TableBlock from './BlockTypes/TableBlock/TableBlock';
import BulletedListWrapper from './Wrappers/BulletedListWrapper/BulletedListWrapper';
import PageHeaderWrapper from './Wrappers/PageHeaderWrapper/PageHeaderWrapper';
import { css } from '@emotion/react';
import TableOfContents from './TableOfContents/TableOfContents';

const App = () => {
  const [blockMap, setBlockMap] = React.useState(null);

  useEffect(() => {
    fetch(
      'https://notion-api.splitbee.io/v1/page/575d3ec590204c938adc349bef9cabc9',
    )
      .then((res) => res.json())
      .then((data) => {
        setBlockMap(data);
      });
  }, []);

  if (!blockMap) {
    return <div>...loading</div>;
  }

  return (
    <div style={{ display: 'flex' }} css={PageGlobalStyles}>
      <NotionRenderer
        blockMap={blockMap}
        fullPage
        customBlockComponents={{
          header: ({ blockValue, renderComponent, blockMap }) => {
            return (
              <HeadingWrapper blockValue={blockValue} blockMap={blockMap}>
                {renderComponent()}
              </HeadingWrapper>
            );
          },
          sub_header: ({ blockValue, renderComponent }) => {
            return <div id={blockValue.id}> {renderComponent()}</div>;
          },
          sub_sub_header: ({ blockValue, renderComponent }) => {
            return <div id={blockValue.id}> {renderComponent()}</div>;
          },
          code: ({ blockValue }) => {
            return <CodeBlock value={blockValue} />;
          },
          callout: ({ blockValue }) => {
            return <CalloutBlock value={blockValue} />;
          },
          text: ({ blockValue }) => {
            return <TextBlock value={blockValue} />;
          },
          // @ts-ignore
          equation: ({ blockValue }) => {
            return <EquationBlock value={blockValue} />;
          },
          table: ({ blockValue }: any) => {
            return <TableBlock value={blockValue} blockMap={blockMap} />;
          },
          bulleted_list: ({ renderComponent }) => {
            return (
              <BulletedListWrapper>{renderComponent()}</BulletedListWrapper>
            );
          },
          page: ({ renderComponent }) => {
            return <PageHeaderWrapper>{renderComponent()}</PageHeaderWrapper>;
          },
          // @ts-ignore
          table_of_contents: ({ blockMap }) => {
            return <TableOfContents blockMap={blockMap} />;
          },
        }}
      />
    </div>
  );
};

export default App;

const PageGlobalStyles = css`
  .notion-row {
    display: flex;
  }
  .notion-page-cover {
    display: block;
    object-fit: cover;
    border-radius: 0;
    width: 100%;
    height: 30vh;
    max-height: 280px;
    opacity: 1;
    object-position: center 50%;
  }
  .notion-title,
  .notion-page-icon-cover {
    display: none;
  }
  .notion-page-header {
    padding: 12px 12px;
  }
  .notion-nav-breadcrumb {
    border-radius: 4px;
    border: none;
    font-size: 14px;
    padding: 2px 6px;
    color: rgba(255, 255, 255, 0.81);
    cursor: pointer;

    :hover {
      background: rgba(255, 255, 255, 0.055);
    }
  }
  .notion-nav-spacer {
    color: rgba(156, 156, 156);
  }
  .notion-nav-icon {
    margin-right: 6px;
  }
`;
