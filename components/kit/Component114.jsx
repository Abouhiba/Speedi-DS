// figma node: 3:5174 Component 114
export function Component114(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 688,
      height: 77,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 688,
        height: 77,
        borderRadius: 15,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1.923px rgb(231,231,231)",
      }} />
      <div style={{
        position: "absolute",
        left: 569,
        top: 0,
        width: 119,
        height: 77,
        borderRadius: 15.384614944458008,
        backgroundColor: "rgb(239,63,55)",
        display: "flex",
        flexDirection: "row",
        gap: 19,
        padding: "0px 19px 0px 19px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 27,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "Apply"}</span>
      </div>
      <span style={{
        position: "absolute",
        left: 29,
        top: 17,
        width: 358,
        height: 44,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 27,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(144,144,144)",
      }}>{props.text2 ?? "Please enter voucher code"}</span>
    </div>
  );
}
export default Component114;
