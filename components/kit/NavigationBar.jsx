// figma node: 1:10 Navigation Bar
export function NavigationBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 48,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 390,
        height: 48,
        backgroundColor: "rgb(255,255,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 10,
        top: 9,
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(231,231,231)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "8px 6px 8px 10px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={10} height={9.999} viewBox="0 0 10 9.999" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,-0.707,0.707,0.707,10,15.071)",
          transformOrigin: "0 0",
          width: 10,
          height: 9.999,
        }}>
          <path d={"M 8.963 0 L 1.036 0 C 0.464 0 0 0.465 0 1.036 L 0 8.933 C 0 9.49 0.429 9.976 0.986 9.998 C 1.578 10.026 2.071 9.547 2.071 8.961 L 2.071 2.573 C 2.071 2.294 2.293 2.072 2.571 2.072 L 8.935 2.072 C 9.492 2.072 9.977 1.644 9.999 1.086 C 10.027 0.486 9.549 0 8.963 0 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 341,
        top: 9,
        width: 39,
        height: 25,
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0)",
        boxShadow: "inset 0 0 0 1px rgb(231,231,231)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "6px 11px 6px 11px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "13px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "EN"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 50,
        top: 2,
        width: 290,
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 0px 10px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Page Title"}</span>
      </div>
    </div>
  );
}
export default NavigationBar;
