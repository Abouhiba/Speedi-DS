// figma node: 4:16879 tag (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Tag(_p = {}) {
  const props = { ..._p, available: _p.available ?? false, type: _p.type ?? "greeen" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 117,
      borderRadius: 4,
      backgroundColor: "rgb(231,46,40)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Cairo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: 1.2000000476837158,
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "اشتر 1 والثاني مجاناً"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 117,
      borderRadius: 4,
      backgroundColor: "rgb(213,223,112)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 42,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-5b4a50276304b4f9" style={{
          position: "relative",
          width: 7,
          height: 8,
          flexShrink: 0,
        }} />
        <span style={{
          position: "relative",
          fontFamily: "Cairo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1,
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "29.95"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Cairo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: 1.2000000476837158,
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "اشتر ٢ بسعر "}</span>
    </div>
  );
  const __impls = {
    // figma: type=red
    "type=red": __body0,
    // figma: type=Greeen
    "type=greeen": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Tag;
