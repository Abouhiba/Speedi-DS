// figma node: 3:5388 Component 75
export function Component75(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 700,
      height: 77,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 138,
        height: 77,
        display: "flex",
        flexDirection: "row",
        padding: "0px 15px 0px 15px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 31,
          textAlign: "center",
          whiteSpace: "pre-wrap",
          lineHeight: "42px",
          color: "rgb(239,63,55)",
          flexShrink: 0,
        }}><span style={{ color: "rgb(48,48,48)", fontSize: 31 }}>{"Name"}</span>{"*"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 179,
        top: 2,
        width: 521,
        height: 73,
        borderRadius: 15.384614944458008,
        boxShadow: "inset 0 0 0 1.923px rgb(231,231,231)",
        display: "flex",
        flexDirection: "row",
        gap: 19,
        padding: "15px 15px 15px 15px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 31,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "42px",
          color: "rgb(144,144,144)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Enter name"}</span>
      </div>
    </div>
  );
}
export default Component75;
