import type { MDXComponents as MDXComponentsType } from "mdx/types";
import { Tooltip } from "./mdx/Tooltip";
import { Callout } from "./mdx/Callout";
import { ColumnVsRow } from "./mdx/ColumnVsRow";
import { ParquetStructure } from "./mdx/ParquetStructure";
import { FormatComparison } from "./mdx/FormatComparison";
import { FormatSizeChart } from "./mdx/FormatSizeChart";

export const mdxComponents: MDXComponentsType = {
  Tooltip: Tooltip as unknown as React.ComponentType,
  Callout: Callout as unknown as React.ComponentType,
  ColumnVsRow: ColumnVsRow as unknown as React.ComponentType,
  ParquetStructure: ParquetStructure as unknown as React.ComponentType,
  FormatComparison: FormatComparison as unknown as React.ComponentType,
  FormatSizeChart: FormatSizeChart as unknown as React.ComponentType,
  h1: (props) => (
    <h1
      className="font-display font-bold text-text tracking-[-0.03em] mt-12 mb-4"
      style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-display font-semibold text-text tracking-[-0.02em] mt-10 mb-3"
      style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-display font-medium text-text tracking-[-0.01em] mt-8 mb-3 text-xl"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="font-display font-medium text-subtext1 mt-6 mb-2 text-lg"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="font-body text-[16px] font-light text-subtext0 leading-[1.7] mb-5"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-lavender underline-offset-4 hover:underline transition-colors duration-250"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-subtext0 font-body text-[16px] font-light leading-[1.6]" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-6 space-y-2 text-subtext0 font-body text-[16px] font-light leading-[1.6]" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-peach pl-6 py-2 my-6 italic text-subtext0 font-body text-[17px] leading-[1.9]"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-[0.9em] text-lavender bg-mantle px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-mantle border border-surface0 rounded-lg p-5 overflow-x-auto mb-6 font-mono text-[14px] leading-relaxed"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-none h-px bg-surface0 my-10" />
  ),
};
