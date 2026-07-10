// figma node: 3:5081 系统设置-750
export function Component23(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 688,
      height: 92,
      position: "relative",
      color: "rgb(144,144,144)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 688,
        height: 92,
        backgroundColor: "rgb(255,255,255)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 27,
        width: 158,
        height: 38,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 31,
        whiteSpace: "nowrap",
        lineHeight: "38px",
        color: "rgb(48,48,48)",
      }}>{props.text1 ?? "Language"}</span>
      <span style={{
        position: "absolute",
        left: 548,
        top: 23,
        width: 107,
        height: 46,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 31,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "46px",
        color: "rgb(144,144,144)",
      }}>{props.text2 ?? "English"}</span>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-0.707,0.707,-0.707,-0.707,688,46)",
        transformOrigin: "0 0",
        width: 19,
        height: 19,
        overflow: "hidden",
      }}>
        <svg width={19} height={19} viewBox="0 0 19 19" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 19,
          height: 19,
        }}>
          <path d={"M 17.03 0 L 1.968 0 C 0.882 0 0 0.883 0 1.969 L 0 16.974 C 0 18.034 0.814 18.957 1.873 18.998 C 2.999 19.052 3.935 18.142 3.935 17.029 L 3.935 4.889 C 3.935 4.359 4.356 3.938 4.885 3.938 L 16.976 3.938 C 18.034 3.938 18.957 3.123 18.998 2.064 C 19.052 0.923 18.143 0 17.03 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Component23;
