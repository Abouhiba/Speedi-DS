// figma node: 1:30 16Text/Body-Main
export function TextBodyMain16(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 139,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 144,
        height: 24,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "16Text/Body-Main"}</span>
    </div>
  );
}
export default TextBodyMain16;
