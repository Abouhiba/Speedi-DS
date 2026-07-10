// figma node: 3:3792 Rectangle 91
export function Rectangle91(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 750,
      height: 750,
      position: "relative",
      color: "rgb(42,167,56)",
      ...props.style,
    }}>
      <div className="fig-asset-274597538266e434" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 750,
        height: 750,
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 96,
        height: 96,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 96,
          height: 96,
          overflow: "hidden",
        }}>
          <svg width={96} height={96} viewBox="0 0 96 96" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 96,
            height: 96,
          }}>
            <path d={"M 56.722 3.254 C 51.684 -1.085 44.208 -1.085 39.169 3.254 L 33.102 8.461 C 32.397 9.058 31.476 9.437 30.555 9.546 L 22.591 10.197 C 15.982 10.739 10.673 16 10.185 22.617 L 9.535 30.59 C 9.481 31.512 9.102 32.434 8.451 33.139 L 3.251 39.214 C -1.084 44.258 -1.084 51.742 3.251 56.786 L 8.451 62.861 C 9.047 63.566 9.427 64.488 9.535 65.41 L 10.185 73.383 C 10.727 80 15.982 85.315 22.591 85.803 L 30.555 86.454 C 31.53 86.508 32.397 86.888 33.156 87.539 L 39.223 92.746 C 44.262 97.085 51.738 97.085 56.777 92.746 L 62.844 87.539 C 63.549 86.942 64.47 86.563 65.445 86.454 L 73.409 85.803 C 80.018 85.261 85.327 80 85.815 73.383 L 86.465 65.41 C 86.519 64.434 86.898 63.566 87.549 62.807 L 92.749 56.732 C 97.084 51.688 97.084 44.203 92.749 39.159 L 87.549 33.085 C 86.953 32.38 86.573 31.458 86.465 30.481 L 85.815 22.508 C 85.273 15.892 80.018 10.576 73.409 10.088 L 65.445 9.437 C 64.524 9.383 63.603 9.003 62.898 8.353 L 56.722 3.254 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 6,
          top: 12,
          width: 88,
          height: 49,
          display: "flex",
          flexDirection: "row",
          gap: 19,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 27,
            textAlign: "center",
            lineHeight: "48px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "20%"}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 4,
          top: 50,
          width: 90,
          height: 36,
          display: "flex",
          flexDirection: "row",
          gap: 19,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 27,
            whiteSpace: "nowrap",
            lineHeight: "48px",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>{props.text2 ?? "OFF"}</span>
        </div>
      </div>
    </div>
  );
}
export default Rectangle91;
