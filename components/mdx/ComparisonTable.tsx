"use client";

interface ComparisonTableProps {
  headers: string[];
  rows: { cells: string[]; winner?: number }[];
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-surface0 bg-mantle">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="bg-surface0 font-mono text-[11px] uppercase tracking-[0.1em] text-subtext1 px-4 py-3 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.cells.map((cell, cellIndex) => {
                const isWinner =
                  row.winner !== undefined && row.winner === cellIndex;
                const isFirstColumn = cellIndex === 0;

                return (
                  <td
                    key={cellIndex}
                    className={`font-body text-[14px] px-4 py-3 border-b border-surface0 ${
                      isFirstColumn ? "font-medium text-text" : "text-subtext0"
                    } ${isWinner ? "text-peach" : ""}`}
                    style={
                      isWinner
                        ? { backgroundColor: "rgba(250,179,135,0.08)" }
                        : undefined
                    }
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
