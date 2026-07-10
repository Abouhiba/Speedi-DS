// figma node: 4:16741 Price Tag
export function PriceTag(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,57,57)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Cairo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 10,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "SAVE 36%"}</span>
    </div>
  );
}
export default PriceTag;
