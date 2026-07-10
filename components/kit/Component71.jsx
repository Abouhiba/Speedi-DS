// figma node: 4:20364 Component 71
export function Component71(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390.314,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(231,231,231)",
      borderRight: "1px solid rgb(231,231,231)",
      borderBottom: "1px solid rgb(231,231,231)",
      borderLeft: "1px solid rgb(231,231,231)",
      position: "relative",
      color: "rgb(48,48,48)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 174,
        height: 40,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 16px 10px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Purchase Notes"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 347,
        top: 0,
        width: 43.314,
        height: 40,
        display: "flex",
        flexDirection: "row",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={8.001} height={8} viewBox="0 0 8.001 8" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(-0.707,0.707,-0.707,-0.707,27.314,20.000)",
          transformOrigin: "0 0",
          width: 8.001,
          height: 8,
        }}>
          <path d={"M 7.171 0 L 0.829 0 C 0.371 0 0 0.372 0 0.829 L 0 7.147 C 0 7.593 0.343 7.982 0.789 7.999 C 1.263 8.022 1.657 7.639 1.657 7.17 L 1.657 2.058 C 1.657 1.835 1.834 1.658 2.057 1.658 L 7.149 1.658 C 7.594 1.658 7.983 1.315 8 0.869 C 8.023 0.389 7.64 0 7.171 0 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}
export default Component71;
