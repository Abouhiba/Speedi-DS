// figma node: 4:16897 Title Products (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function TitleProducts(_p = {}) {
  const props = { ..._p, text: _p.text ?? "text", property1: _p.property1 ?? "default", changeText: _p.changeText ?? "Vegetable Ghee Butter Flavor 400Ml" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 117,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 5px 5px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      alignContent: "space-between",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.2000000476837158,
        color: "rgb(0,0,0)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.changeText}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TitleProducts;
