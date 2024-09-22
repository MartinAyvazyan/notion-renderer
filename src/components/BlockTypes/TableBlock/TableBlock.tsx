import React from 'react';
import { css } from '@emotion/react';

interface ITableBlockProps {
  value: any;
  blockMap: any;
}

const TableBlock: React.FC<ITableBlockProps> = ({ value, blockMap }) => {
  const {
    content,
    format: { table_block_column_header, table_block_column_order },
  } = value;
  return (
    <div css={TableBlockStyles}>
      <table>
        <tbody>
          {content.map((rowId: string, rowIndex: number) => {
            const {
              value: { format, properties },
            } = blockMap[rowId];
            return (
              <tr key={rowId} className={format ? format.block_color : ''}>
                {table_block_column_order.map(
                  (cell: string, cellIndex: number) => {
                    const tableCellValue = properties[cell];
                    if (
                      table_block_column_header &&
                      cellIndex === 0 &&
                      rowIndex === 0
                    ) {
                      return <td key={cell + rowId}></td>;
                    }
                    return <td key={cell + rowId}>{tableCellValue}</td>;
                  },
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBlock;

const TableBlockStyles = css`
  > table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 14px;
  }

  th,
  td {
    width: 120px;
    border: 1px solid #2f2f2f;
    padding: 7px 9px;
  }
  tr {
    &.teal_background {
      background: #253c30;
    }
  }
  padding-top: 8px;
  padding-bottom: 18px;
  padding-right: 18px;
`;
