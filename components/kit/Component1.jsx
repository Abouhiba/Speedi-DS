// figma node: 3:246 Component 1
export function Component1(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 358,
      height: 48,
      position: "relative",
      color: "rgb(144,144,144)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 358,
        height: 48,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(231,231,231)",
        borderRight: "1px solid rgb(231,231,231)",
        borderBottom: "1px solid rgb(231,231,231)",
        borderLeft: "1px solid rgb(231,231,231)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 14,
        width: 147,
        height: 20,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(48,48,48)",
      }}>{props.text1 ?? "Message Settings"}</span>
      <span style={{
        position: "absolute",
        left: 201,
        top: 12,
        width: 140,
        height: 24,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(144,144,144)",
      }}>{props.text2 ?? "Message Settings"}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-0.707,0.707,-0.707,-0.707,358,24)",
        transformOrigin: "0 0",
        width: 10,
        height: 10,
        overflow: "hidden",
      }}>
        <svg width={10.001} height={9.994} viewBox="0 0 10.001 9.994" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 10.001,
          height: 9.994,
        }}>
          <path d={"M 8.964 0 L 1.036 0 C 0.464 0 0 0.464 0 1.036 L 0 8.929 C 0 9.486 0.429 9.971 0.986 9.993 C 1.579 10.021 2.071 9.543 2.071 8.957 L 2.071 2.571 C 2.071 2.293 2.293 2.071 2.571 2.071 L 8.936 2.071 C 9.493 2.071 9.979 1.643 10 1.086 C 10.029 0.486 9.55 0 8.964 0 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}
export default Component1;
