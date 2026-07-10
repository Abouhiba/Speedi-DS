// figma node: 3:5487 Component 80
export function Component80(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 688,
      height: 94,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 265,
        height: 35,
        display: "flex",
        flexDirection: "row",
        gap: 19,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"GE SS Two\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 27,
          whiteSpace: "nowrap",
          lineHeight: "35px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "رقم التعريف الضريبي"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 44,
        width: 206,
        height: 35,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 27,
          whiteSpace: "nowrap",
          lineHeight: "35px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "VAT included"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 419,
        top: 27,
        width: 269,
        height: 35,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 19,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 27,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "35px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text3 ?? "300057178310003"}</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 92,
        width: 688,
        height: 2,
        backgroundColor: "rgb(231,231,231)",
      }} />
    </div>
  );
}
export default Component80;
