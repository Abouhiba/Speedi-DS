// figma node: 3:235 16Text/ButtonText
export function TextButtonText16(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 143,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 147,
        height: 20,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "16Text/ButtonText"}</span>
    </div>
  );
}
export default TextButtonText16;
