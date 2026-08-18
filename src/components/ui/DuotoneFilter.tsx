// Renders once, invisibly — provides the SVG duotone filter referenced via
// `filter: url(#ember-duotone)` wherever we want the charcoal→ember treatment.
export function DuotoneFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="ember-duotone">
          <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" />
          <feComponentTransfer>
            {/* shadows -> ink, highlights -> ember-light */}
            <feFuncR type="table" tableValues="0.078 0.949" />
            <feFuncG type="table" tableValues="0.071 0.537" />
            <feFuncB type="table" tableValues="0.059 0.290" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
