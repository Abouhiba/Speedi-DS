// figma node: 3:4707 Component 27
export function Component27(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 144,
      height: 119,
      backgroundColor: "rgb(247,247,247)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 71,
        width: 144,
        height: 48,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 0px 10px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 19,
          whiteSpace: "nowrap",
          lineHeight: "27px",
          color: "rgb(48,48,48)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Grape"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 0,
        width: 125,
        height: 77,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 0px 6px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div className="fig-asset-dc79012623df4806" style={{
          position: "relative",
          width: 58,
          height: 58,
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}
export default Component27;
