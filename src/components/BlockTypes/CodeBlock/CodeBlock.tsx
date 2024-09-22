import React from 'react';
import { css } from '@emotion/react';

interface ICodeBlockProps {
  value: any;
}

const CodeBlock: React.FC<ICodeBlockProps> = ({ value }) => {
  const {
    properties: { title, language },
  } = value;
  const [languageValue] = language;

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(title).then(
      () => {
        alert('Copied to clipboard');
        console.log('Async: Copying to clipboard was successful!');
      },
      (err) => {
        console.error('Async: Could not copy text: ', err);
      },
    );
  };

  return (
    <div css={CodeBlockStyles}>
      <header>
        <div css={LanguageStyles}>{languageValue}</div>
        <button css={CopyStyles} onClick={copyToClipBoard}>
          Copy
        </button>
      </header>
      <code>{title}</code>
    </div>
  );
};

export default CodeBlock;

const CodeBlockStyles = css`
  border-radius: 4px;
  background-color: #202020;
  padding: 34px 16px 32px 32px;
  font-family: SFMono-Regular, Menlo, Consolas, 'PT Mono', 'Liberation Mono',
    Courier, monospace;
  > code {
    font-size: 14px;
    white-space: pre-wrap;
    line-height: 20px;
  }
  position: relative;
  > header {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 100%;
    justify-content: space-between;
    display: none;
  }
  :hover {
    > header {
      display: flex;
    }
  }
`;

const LanguageStyles = css`
  line-height: 20px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.443);
`;

const CopyStyles = css`
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  margin-right: 20px;
  color: rgba(255, 255, 255, 0.81);
  background-color: rgb(37, 37, 37);
  :hover {
    background-color: rgba(255, 255, 255, 0.055);
  }
`;
