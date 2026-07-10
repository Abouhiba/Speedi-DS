import { Choose1 } from './Choose1.jsx';

// figma node: 3:370 Group 32
export function Group32(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 343,
      height: 38.098,
      position: "relative",
      color: "rgb(48,48,48)",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 116,
        height: 38.098,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "rgb(48,48,48)",
      }}>{props.text1 ?? "Delivery Address"}</span>
      <div style={{
        position: "absolute",
        left: 99.406,
        top: 7.62,
        width: 243.594,
        height: 22.859,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(48,48,48)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text2 ?? "+"}</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "6px 0px 6px 0px",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 9.28,
              height: 10,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.280} height={9.237} viewBox="0 0 9.280 9.237" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 9.28,
                height: 9.237,
              }}>
                <path d={"M 4.357 0 C 4.361 0.084 4.367 0.146 4.367 0.208 C 4.367 1.687 4.367 3.165 4.367 4.643 C 4.367 4.842 4.379 4.85 4.575 4.808 C 4.84 4.75 5.107 4.703 5.369 4.64 C 5.413 4.629 5.454 4.569 5.477 4.523 C 5.488 4.482 5.489 4.439 5.482 4.398 C 5.482 3.445 5.482 2.491 5.482 1.539 C 5.477 1.484 5.486 1.43 5.507 1.379 C 5.528 1.329 5.56 1.284 5.602 1.247 C 5.867 1.032 6.132 0.819 6.398 0.607 C 6.442 0.579 6.488 0.554 6.536 0.533 C 6.543 0.617 6.551 0.677 6.551 0.738 C 6.551 1.877 6.551 3.016 6.551 4.156 C 6.551 4.198 6.551 4.241 6.551 4.283 C 6.556 4.362 6.593 4.4 6.68 4.38 C 7.262 4.257 7.844 4.135 8.426 4.014 C 8.668 3.964 8.916 3.921 9.16 3.87 C 9.265 3.848 9.294 3.894 9.272 3.978 C 9.201 4.265 9.126 4.551 9.046 4.836 C 9.016 4.942 8.938 4.988 8.818 5.01 C 8.298 5.109 7.782 5.224 7.264 5.332 C 7.097 5.366 6.929 5.398 6.761 5.425 C 6.58 5.454 6.548 5.487 6.548 5.664 C 6.548 5.909 6.548 6.155 6.548 6.4 C 6.548 6.541 6.584 6.566 6.72 6.538 C 7.376 6.404 8.031 6.27 8.687 6.136 C 8.836 6.105 8.984 6.068 9.133 6.033 C 9.216 6.013 9.302 6.013 9.274 6.124 C 9.198 6.431 9.113 6.736 9.019 7.038 C 9.006 7.067 8.985 7.093 8.96 7.113 C 8.935 7.134 8.906 7.149 8.874 7.158 C 8.629 7.22 8.38 7.269 8.132 7.32 C 7.605 7.428 7.078 7.533 6.55 7.64 C 6.233 7.704 5.916 7.767 5.599 7.835 C 5.479 7.86 5.479 7.791 5.479 7.714 C 5.479 7.112 5.479 6.51 5.479 5.908 C 5.479 5.707 5.464 5.696 5.261 5.737 C 4.995 5.791 4.732 5.849 4.465 5.898 C 4.368 5.916 4.364 5.977 4.364 6.048 C 4.364 6.378 4.36 6.709 4.364 7.038 C 4.37 7.199 4.321 7.358 4.225 7.491 C 4.062 7.721 3.902 7.957 3.742 8.185 C 3.665 8.303 3.563 8.404 3.442 8.482 C 3.322 8.56 3.186 8.613 3.044 8.637 C 2.601 8.718 2.164 8.827 1.723 8.918 C 1.393 8.987 1.059 9.044 0.73 9.11 C 0.542 9.148 0.355 9.195 0.166 9.227 C 0.008 9.255 -0.024 9.227 0.015 9.079 C 0.085 8.814 0.164 8.551 0.24 8.286 C 0.253 8.236 0.281 8.19 0.322 8.156 C 0.363 8.122 0.413 8.101 0.467 8.095 C 1.01 7.99 1.547 7.872 2.086 7.76 C 2.409 7.694 2.731 7.63 3.053 7.57 C 3.262 7.53 3.273 7.522 3.273 7.315 C 3.273 6.976 3.273 6.637 3.273 6.298 C 3.273 6.187 3.245 6.149 3.119 6.177 C 2.551 6.301 1.981 6.417 1.411 6.534 C 1.159 6.586 0.905 6.632 0.653 6.684 C 0.563 6.703 0.505 6.688 0.532 6.588 C 0.613 6.282 0.694 5.976 0.789 5.675 C 0.803 5.645 0.823 5.619 0.849 5.598 C 0.875 5.577 0.905 5.562 0.937 5.554 C 1.554 5.424 2.172 5.304 2.791 5.183 C 2.901 5.161 3.012 5.135 3.123 5.115 C 3.234 5.094 3.275 5.031 3.274 4.918 C 3.274 3.618 3.274 2.317 3.271 1.016 C 3.269 0.968 3.277 0.92 3.295 0.876 C 3.313 0.831 3.339 0.79 3.374 0.755 C 3.626 0.483 3.917 0.246 4.238 0.054 C 4.269 0.036 4.304 0.024 4.357 0 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={3.813} height={1.805} viewBox="0 0 3.813 1.805" fill="none" style={{
                position: "absolute",
                left: 5.464,
                top: 8.195,
                width: 3.813,
                height: 1.805,
              }}>
                <path d={"M 0 1.675 C 0.098 1.369 0.193 1.062 0.298 0.758 C 0.31 0.722 0.375 0.69 0.419 0.68 C 0.997 0.558 1.577 0.441 2.155 0.321 C 2.596 0.229 3.036 0.133 3.477 0.041 C 3.561 0.02 3.648 0.006 3.735 0 C 3.761 0 3.814 0.052 3.813 0.078 C 3.782 0.415 3.689 0.745 3.54 1.051 C 3.527 1.071 3.512 1.087 3.493 1.101 C 3.474 1.114 3.452 1.124 3.43 1.129 C 3.007 1.218 2.589 1.3 2.169 1.385 C 1.83 1.455 1.493 1.527 1.154 1.596 C 0.815 1.666 0.487 1.731 0.15 1.8 C 0.05 1.822 0.013 1.779 0 1.675 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(48,48,48)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "59.90"}</span>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(48,48,48)",
          flexShrink: 0,
        }}>{props.text4 ?? "Four Season Hotel"}</span>
        <div style={{
          position: "relative",
          width: 11.314,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={8.001} height={8} viewBox="0 0 8.001 8" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-0.707,0.707,-0.707,-0.707,11.314,5.657)",
            transformOrigin: "0 0",
            width: 8.001,
            height: 8,
          }}>
            <path d={"M 7.171 0 L 0.829 0 C 0.371 0 0 0.372 0 0.829 L 0 7.147 C 0 7.593 0.343 7.982 0.789 7.999 C 1.263 8.022 1.657 7.639 1.657 7.17 L 1.657 2.058 C 1.657 1.835 1.834 1.658 2.057 1.658 L 7.149 1.658 C 7.594 1.658 7.983 1.315 8 0.869 C 8.023 0.389 7.64 0 7.171 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <Choose1 style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
}
export default Group32;
