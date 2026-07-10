// figma node: 3:4607 Frame 39
export function Frame39(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 15.384614944458008,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.923px rgb(144,144,144)",
      display: "flex",
      flexDirection: "row",
      gap: 19,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 27,
        whiteSpace: "nowrap",
        lineHeight: "46px",
        color: "rgb(144,144,144)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Steak"}</span>
    </div>
  );
}
export default Frame39;
