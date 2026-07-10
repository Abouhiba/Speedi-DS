// figma node: 1:28 26Text/H1-PageTitle
export function TextH1PageTitle26(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 260,
      height: 34,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 269,
        height: 34,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 26,
        whiteSpace: "nowrap",
        lineHeight: "34px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "26Text/H1-PageTitle "}</span>
    </div>
  );
}
export default TextH1PageTitle26;
