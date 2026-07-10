// figma node: 3:237 12Text/Caption-Tag
export function TextCaptionTag12(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 112,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 119,
        height: 16,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "12Text/Caption-Tag"}</span>
    </div>
  );
}
export default TextCaptionTag12;
