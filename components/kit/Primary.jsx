// figma node: 1:6  Primary主按钮
export function Primary(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      backgroundColor: "rgb(239,63,55)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
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
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "Primary主按钮"}</span>
    </div>
  );
}
export default Primary;
