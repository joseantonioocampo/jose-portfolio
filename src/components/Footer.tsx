import { useLang } from '../i18n';
import { content } from '../content';

export default function Footer() {
  const { lang } = useLang();
  const c = content[lang].footer;
  return (
    <footer
      style={{
        borderTop: '1px solid #E5E0D4',
        padding: '30px 0',
        color: '#908A7E',
        fontSize: 13
      }}
    >
      <div className="wrap flex items-center justify-between flex-wrap gap-4">
        <span className="flex items-center gap-[10px]">
          <span className="dot" />
          <span className="serif" style={{ fontSize: 16 }}>
            José Antonio Ocampo Cervantes
          </span>
        </span>
        <span>{c.text}</span>
      </div>
    </footer>
  );
}
