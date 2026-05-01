interface TagProps {
  code: string;
  color: string;
  large?: boolean;
}

export function Tag({ code, color, large = false }: TagProps) {
  return (
    <span
      className={`gov-tag${large ? ' gov-tag--lg' : ''}`}
      style={{ background: color }}
    >
      {code}
    </span>
  );
}
