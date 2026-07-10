import { LLQoCRTif } from './LLQoCRTif.jsx';

// figma node: 4:16890 Price
export function Price(_p = {}) {
  const props = { ..._p, price: _p.price ?? true, wasPrices: _p.wasPrices ?? true };
  return (
    <div className={props.className} style={{
      width: 110,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.price && (
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
        <span style={{
          position: "relative",
          fontFamily: "Cairo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1,
          color: "rgb(231,46,40)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "29.95"}</span>
        <div style={{
            position: "relative",
            width: 7,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <LLQoCRTif style={{ transform: "scale(0.539, 0.571)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.wasPrices && (
      <div style={{
        position: "relative",
        width: 42,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Cairo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1,
          color: "rgb(100,100,100)",
          textDecoration: "line-through",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "29.95"}</span>
        <div className="fig-asset-5b4a50276304b4f9" style={{
          position: "relative",
          width: 7,
          height: 8,
          flexShrink: 0,
        }} />
      </div>
      )}
    </div>
  );
}
export default Price;
