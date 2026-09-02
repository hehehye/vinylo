export default function HamburgerIcon() {
  return (
    <button aria-label="메뉴 열기" style={{  display: "flex" }}>
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
        <line x1="0" y1="1" x2="20" y2="1" stroke="#232019" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="7" x2="20" y2="7" stroke="#232019" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="13" x2="20" y2="13" stroke="#232019" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}