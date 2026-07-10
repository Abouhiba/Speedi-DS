// figma node: 3:2873 Component 18
export function Component18(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 688,
      height: 150,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 688,
        height: 150,
        borderRadius: 15,
        backgroundColor: "rgb(255,255,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 8,
        top: 15,
        width: 54,
        height: 54,
        overflow: "hidden",
      }}>
        <svg width={35} height={40} viewBox="0 0 35 40" fill="none" style={{
          position: "absolute",
          left: 10,
          top: 6,
          width: 35,
          height: 40,
        }}>
          <path d={"M 17.505 0 C 7.848 0 0 7.834 0 17.474 C 0 24.132 4.882 28.375 9.208 32.853 C 10.685 34.381 14.283 37.726 16.231 39.511 C 16.959 40.163 18.062 40.163 18.79 39.511 C 20.717 37.726 24.315 34.403 25.792 32.853 C 30.214 28.279 35 24.111 35 17.474 C 35 7.834 27.152 0 17.505 0 Z M 24.85 29.55 C 23.18 31.196 19.283 34.777 17.966 36.027 C 17.709 36.262 17.313 36.262 17.045 36.027 C 15.685 34.766 11.617 31.004 10.182 29.583 C 6.777 26.205 3.319 22.593 3.319 17.463 C 3.298 9.629 9.636 3.302 17.484 3.302 C 25.332 3.302 31.67 9.629 31.67 17.463 C 31.692 22.582 28.266 26.195 24.85 29.55 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
          position: "absolute",
          left: 19,
          top: 15,
          width: 15,
          height: 15,
        }}>
          <path d={"M 7.5 0 C 3.372 0 0 3.361 0 7.5 C 0 11.628 3.361 15 7.5 15 C 11.628 15 15 11.639 15 7.5 C 14.989 3.361 11.628 0 7.5 0 Z M 7.5 11.77 C 5.124 11.77 3.197 9.843 3.197 7.467 C 3.197 5.091 5.124 3.164 7.5 3.164 C 9.876 3.164 11.803 5.091 11.803 7.467 C 11.803 9.843 9.876 11.77 7.5 11.77 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span style={{
        position: "absolute",
        left: 71,
        top: 73,
        width: 601.52,
        height: 62,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 23,
        lineHeight: "31px",
        color: "rgb(48,48,48)",
        whiteSpace: "pre-wrap",
      }}>{props.text1 ?? "No. 200, Hefeng Road, Yuhua District, Changsha City, \nHunan Province"}</span>
      <span style={{
        position: "absolute",
        left: 71,
        top: 27,
        width: 368,
        height: 31,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 31,
        whiteSpace: "nowrap",
        lineHeight: "31px",
        color: "rgb(48,48,48)",
      }}>{props.text2 ?? "Yao Yao  |  13817467878"}</span>
    </div>
  );
}
export default Component18;
