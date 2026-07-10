// figma node: 3:5202 Component 98
export function Component98(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 750,
      height: 77,
      position: "relative",
      color: "rgb(144,144,144)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 750,
        height: 77,
        backgroundColor: "rgb(255,255,255)",
      }} />
      <svg width={19} height={19} viewBox="0 0 19 19" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.707,0.707,-0.706,0.708,706,27)",
        transformOrigin: "0 0",
        width: 19,
        height: 19,
      }}>
        <path d={"M 17.03 0 L 1.968 0 C 0.882 0 0 0.883 0 1.969 L 0 16.974 C 0 18.034 0.814 18.957 1.873 18.998 C 2.999 19.052 3.935 18.142 3.935 17.029 L 3.935 4.889 C 3.935 4.359 4.356 3.938 4.885 3.938 L 16.976 3.938 C 18.034 3.938 18.957 3.123 18.998 2.064 C 19.052 0.923 18.143 0 17.03 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "absolute",
        left: 31,
        top: 0,
        width: 260,
        height: 77,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 27,
        whiteSpace: "nowrap",
        lineHeight: "77px",
        color: "rgb(48,48,48)",
      }}>{props.text1 ?? "Available Cards(3)"}</span>
    </div>
  );
}
export default Component98;
