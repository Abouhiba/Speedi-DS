// figma node: 3:2865 Component 17
export function Component17(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 688,
      height: 212,
      borderRadius: 15.384614944458008,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 38,
        width: 688,
        height: 76,
        display: "flex",
        flexDirection: "row",
        gap: 19,
        padding: "15px 15px 15px 15px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 35,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "46px",
          color: "rgb(48,48,48)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "This order has been paid"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 15,
        top: 105,
        width: 658,
        height: 107,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 19,
        padding: "15px 15px 15px 15px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          width: 657.692,
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 27,
          textAlign: "center",
          lineHeight: "38px",
          color: "rgb(48,48,48)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Store accepted your order and is preparing goods. Please wait patiently~"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 306,
        top: 0,
        width: 77,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "15px 0px 15px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 81,
          height: 2,
          borderRadius: 173,
          backgroundColor: "rgb(231,231,231)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 81,
          height: 2,
          borderRadius: 173,
          backgroundColor: "rgb(231,231,231)",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}
export default Component17;
