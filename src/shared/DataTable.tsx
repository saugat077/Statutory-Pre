import React from 'react';

interface DataTableProps {
  headers: string[];
  rows: React.ReactNode[][];
  highlightRows?: number[];
}

export function DataTable({ headers, rows, highlightRows = [] }: DataTableProps) {
  return (
    <div className="table-wrap">
      <table className="gov-table">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={highlightRows.includes(ri) ? 'row--hl' : ''}>
              {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
