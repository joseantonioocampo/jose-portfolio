type Props = {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Placeholder({ label, src, alt, className, style }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        className={className}
        style={{ objectFit: 'cover', borderRadius: 14, ...style }}
      />
    );
  }
  return (
    <div className={`ph ${className ?? ''}`} style={style}>
      <span className="phlab">{label}</span>
    </div>
  );
}
