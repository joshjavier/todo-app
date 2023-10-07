function SvgSprite() {
  const hidden = {
    position: 'absolute',
    width: 0,
    height: 0,
    visibility: 'hidden',
  };

  return (
    <svg style={hidden}>
      <defs>
        <linearGradient
          id="checkboxBg"
          x1="-10"
          y1="10"
          x2="10"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55DDFF" />
          <stop offset="1" stopColor="#C058F3" />
        </linearGradient>

        <circle
          id="checkboxOutline"
          cx="10"
          cy="10"
          r="9.5"
          fill="white"
          stroke="black"
        />

        <circle
          id="checkboxFill"
          cx="10"
          cy="10"
          r="10"
          fill="url(#checkboxBg)"
        />

        <polyline
          id="checkboxCheckmark"
          points="6.66675,10.2534 8.91333,12.5 13.9133,7.5"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />

        <symbol id="cross" fill="none" stroke="currentColor">
          <line x1="0.5" y1="0.5" x2="11.5" y2="11.5" />
          <line x1="0.5" y1="11.5" x2="11.5" y2="0.5" />
        </symbol>
      </defs>
    </svg>
  );
}

export default SvgSprite;
