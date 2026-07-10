import { Choose1 } from './Choose1.jsx';

// figma node: 3:358 Component 16
export function Component16(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 358,
      height: 186,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 358,
        height: 146,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
      }} />
      <span style={{
        position: "absolute",
        left: 8,
        top: 8,
        width: 113,
        height: 24,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(48,48,48)",
      }}>{props.text1 ?? "Delivery Details"}</span>
      <span style={{
        position: "absolute",
        left: 40,
        top: 42,
        width: 302,
        height: 40,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgb(48,48,48)",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}><span style={{ color: "rgb(144,144,144)" }}>{"Delivery Now"}</span>{" "}{"\n"}{"Delivery in 120 minutes"}</span>
      <div style={{
          position: "absolute",
          left: 8,
          top: 50,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <Choose1 />}</div>
      <div style={{
          position: "absolute",
          left: 8,
          top: 102,
          width: 24,
          height: 24,
        }}>{props.icon2 ?? <Choose1 />}</div>
      <span style={{
        position: "absolute",
        left: 40,
        top: 94,
        width: 302,
        height: 40,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgb(48,48,48)",
        whiteSpace: "pre-wrap",
      }}>{props.text2 ?? "Scheduled\nPlease Select Time Slot"}</span>
    </div>
  );
}
export default Component16;
