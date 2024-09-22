import React from 'react';
import { css } from '@emotion/react';
import FormulaRenderer from '../../FormulaRenderer/FormulaRenderer';

interface ITextBlockProps {
  value: any;
}

const TextBlock: React.FC<ITextBlockProps> = ({ value }) => {
  if (!value.properties) {
    return null;
  }
  const {
    properties: { title },
  } = value;

  return (
    <div css={TextBlockStyles}>
      {title.map((item: any) => {
        const [itemValue, itemConfig] = item;
        if (itemConfig) {
          const [[configTag, configValue]] = itemConfig;
          if (configTag === 'a') {
            return (
              <a href={configValue} key={itemValue} target={'_blank'}>
                {itemValue}
              </a>
            );
          }
          if (configTag === 'c') {
            return (
              <span css={CodeStyles} key={itemValue}>
                {itemValue}
              </span>
            );
          }
          if (configTag === 'e') {
            return (
              <FormulaRenderer inline key={configValue} formula={configValue} />
            );
          }
          if (configTag === 'h') {
            return (
              <span
                key={itemValue}
                className={configValue}
                css={HighlightStyles}
              >
                {itemValue}
              </span>
            );
          }
        }
        return itemValue;
      })}
    </div>
  );
};

export default TextBlock;

const TextBlockStyles = css`
  margin-top: 2px;
  margin-bottom: 1px;
  padding: 3px 2px;
  line-height: 24px;
`;

const CodeStyles = css`
  color: #eb5757;
  padding: 0.2em 0.4em;
  font-size: 14px;
  background-color: #292927;
  border-radius: 4px;
  font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono',
    Courier, monospace;
`;

const HighlightStyles = css`
  &.purple {
    color: rgba(157, 104, 211, 1);
  }
`;
