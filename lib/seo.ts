export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text

  const trimmed = text.slice(0, maxLength - 1)
  const lastSpace = trimmed.lastIndexOf(' ')
  const base = lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed

  return `${base}…`
}
