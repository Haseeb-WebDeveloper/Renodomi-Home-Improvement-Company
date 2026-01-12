/**
 * Converts Sanity portable text to HTML for email templates
 * Supports basic block types: paragraph, heading, list, etc.
 */

interface PortableTextBlock {
  _type: string;
  _key?: string;
  children?: PortableTextSpan[];
  style?: string;
  listItem?: string;
  level?: number;
  markDefs?: any[];
}

interface PortableTextSpan {
  _type: string;
  _key?: string;
  text: string;
  marks?: string[];
}

export function portableTextToHtml(blocks: any[]): string {
  if (!blocks || blocks.length === 0) return "";

  return blocks
    .map((block) => {
      if (!block._type) return "";

      switch (block._type) {
        case "block":
          return renderBlock(block);
        default:
          return "";
      }
    })
    .join("");
}

function renderBlock(block: PortableTextBlock): string {
  const { style = "normal", listItem, level = 1, children = [] } = block;

  const content = children.map((child) => renderSpan(child, block.markDefs || [])).join("");

  if (!content.trim()) return "";

  // Handle list items
  if (listItem) {
    return `<li>${content}</li>`;
  }

  // Handle headings
  if (style.startsWith("h")) {
    const level = parseInt(style.substring(1)) || 1;
    return `<h${level}>${content}</h${level}>`;
  }

  // Handle normal paragraphs
  if (style === "normal" || style === "blockquote") {
    const tag = style === "blockquote" ? "blockquote" : "p";
    return `<${tag}>${content}</${tag}>`;
  }

  // Default to paragraph
  return `<p>${content}</p>`;
}

function renderSpan(span: PortableTextSpan, markDefs: any[]): string {
  let text = span.text || "";

  if (!span.marks || span.marks.length === 0) {
    return escapeHtml(text);
  }

  // Apply marks (bold, italic, etc.)
  span.marks.forEach((mark) => {
    switch (mark) {
      case "strong":
        text = `<strong>${text}</strong>`;
        break;
      case "em":
        text = `<em>${text}</em>`;
        break;
      case "underline":
        text = `<u>${text}</u>`;
        break;
      case "code":
        text = `<code>${text}</code>`;
        break;
      default:
        // Handle custom marks (like links)
        const markDef = markDefs.find((def) => def._key === mark);
        if (markDef && markDef._type === "link") {
          text = `<a href="${escapeHtml(markDef.href || "#")}">${text}</a>`;
        }
    }
  });

  return text;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Replaces template variables in HTML string
 * Supports variables like {{firstName}}, {{lastName}}, etc.
 */
export function replaceTemplateVariables(
  html: string,
  variables: Record<string, string | undefined>
): string {
  let result = html;
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, "g");
    result = result.replace(regex, escapeHtml(value || ""));
  });
  return result;
}

