import { Component8 } from './Component8.jsx';

// figma node: 3:472 双列
export function Component12(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 171,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Component8 style={{
          position: "relative",
          height: 171,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      <div style={{
        position: "relative",
        height: 44,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "8px 8px 8px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          width: 155,
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "18px",
          color: "rgb(48,48,48)",
          flexShrink: 0,
        }}>{props.text1 ?? "Premium Hainan Feizixiao Lychee"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 61,
        borderRadius: "0px 0px 8px 8px",
        backgroundColor: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "absolute",
        left: 8,
        top: 226.913,
        width: 43,
        height: 14.819,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(239,63,55)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 8px 0px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(239,63,55)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Label"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 8,
        top: 253,
        width: 123,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-end",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 0px 2px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12.991,
            height: 14.001,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 12.991,
              height: 14.001,
              overflow: "hidden",
            }}>
              <svg width={12.991} height={12.931} viewBox="0 0 12.991 12.931" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 12.991,
                height: 12.931,
                color: "rgb(239,63,55)",
              }}>
                <path d={"M 6.1 0 C 6.106 0.118 6.114 0.205 6.114 0.291 C 6.114 2.361 6.114 4.431 6.114 6.501 C 6.114 6.779 6.13 6.789 6.405 6.731 C 6.776 6.65 7.149 6.584 7.517 6.496 C 7.579 6.481 7.635 6.397 7.668 6.333 C 7.683 6.275 7.685 6.215 7.674 6.157 C 7.674 4.823 7.674 3.488 7.674 2.154 C 7.668 2.078 7.68 2.002 7.709 1.931 C 7.738 1.86 7.784 1.797 7.843 1.746 C 8.213 1.445 8.584 1.146 8.957 0.85 C 9.018 0.811 9.083 0.776 9.15 0.747 C 9.16 0.864 9.172 0.948 9.172 1.033 C 9.172 2.628 9.172 4.223 9.172 5.818 C 9.172 5.878 9.172 5.937 9.172 5.997 C 9.178 6.107 9.231 6.16 9.352 6.131 C 10.167 5.96 10.982 5.789 11.797 5.62 C 12.135 5.549 12.482 5.489 12.824 5.418 C 12.971 5.387 13.011 5.452 12.981 5.57 C 12.881 5.971 12.777 6.372 12.664 6.77 C 12.623 6.918 12.514 6.983 12.345 7.014 C 11.617 7.153 10.895 7.313 10.169 7.464 C 9.936 7.512 9.701 7.556 9.466 7.595 C 9.212 7.636 9.167 7.681 9.167 7.929 C 9.167 8.273 9.167 8.616 9.167 8.96 C 9.167 9.158 9.217 9.193 9.408 9.153 C 10.326 8.965 11.243 8.777 12.161 8.59 C 12.371 8.547 12.578 8.495 12.786 8.446 C 12.903 8.418 13.023 8.418 12.984 8.574 C 12.877 9.003 12.758 9.43 12.627 9.853 C 12.608 9.894 12.579 9.929 12.544 9.958 C 12.509 9.987 12.468 10.009 12.424 10.021 C 12.081 10.108 11.732 10.177 11.385 10.248 C 10.647 10.399 9.909 10.546 9.17 10.695 C 8.726 10.785 8.282 10.873 7.839 10.969 C 7.67 11.004 7.67 10.907 7.67 10.799 C 7.67 9.957 7.67 9.114 7.67 8.272 C 7.67 7.99 7.65 7.974 7.366 8.032 C 6.994 8.107 6.624 8.188 6.251 8.258 C 6.115 8.283 6.11 8.368 6.11 8.467 C 6.11 8.929 6.103 9.393 6.11 9.853 C 6.118 10.079 6.05 10.301 5.916 10.487 C 5.686 10.809 5.463 11.139 5.239 11.459 C 5.131 11.624 4.987 11.765 4.819 11.874 C 4.651 11.984 4.461 12.058 4.261 12.092 C 3.641 12.205 3.029 12.357 2.412 12.485 C 1.95 12.581 1.482 12.662 1.022 12.754 C 0.758 12.806 0.497 12.873 0.232 12.917 C 0.011 12.957 -0.033 12.917 0.021 12.71 C 0.119 12.339 0.23 11.971 0.335 11.6 C 0.354 11.53 0.394 11.466 0.451 11.418 C 0.508 11.371 0.578 11.341 0.653 11.333 C 1.414 11.185 2.165 11.02 2.921 10.864 C 3.372 10.771 3.823 10.682 4.274 10.598 C 4.567 10.541 4.581 10.53 4.581 10.241 C 4.581 9.766 4.581 9.291 4.581 8.817 C 4.581 8.662 4.543 8.609 4.366 8.648 C 3.571 8.822 2.774 8.983 1.976 9.147 C 1.622 9.22 1.267 9.284 0.914 9.358 C 0.788 9.384 0.707 9.363 0.745 9.223 C 0.858 8.795 0.972 8.367 1.104 7.945 C 1.124 7.903 1.153 7.867 1.189 7.838 C 1.224 7.808 1.267 7.787 1.312 7.775 C 2.176 7.594 3.041 7.426 3.907 7.256 C 4.061 7.225 4.216 7.189 4.372 7.16 C 4.527 7.132 4.585 7.043 4.584 6.885 C 4.584 5.065 4.584 3.244 4.579 1.423 C 4.576 1.356 4.588 1.289 4.613 1.226 C 4.637 1.163 4.675 1.106 4.723 1.057 C 5.076 0.676 5.483 0.345 5.933 0.075 C 5.976 0.05 6.026 0.033 6.1 0 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
              <svg width={5.338} height={2.527} viewBox="0 0 5.338 2.527" fill="none" style={{
                position: "absolute",
                left: 7.649,
                top: 11.473,
                width: 5.338,
                height: 2.527,
                color: "rgb(239,63,55)",
              }}>
                <path d={"M 0 2.345 C 0.137 1.917 0.271 1.487 0.418 1.062 C 0.435 1.011 0.525 0.965 0.587 0.951 C 1.396 0.781 2.208 0.618 3.017 0.45 C 3.635 0.321 4.25 0.187 4.867 0.057 C 4.986 0.028 5.107 0.009 5.229 0 C 5.266 0 5.34 0.073 5.337 0.109 C 5.294 0.582 5.165 1.043 4.955 1.472 C 4.938 1.499 4.916 1.522 4.89 1.541 C 4.863 1.56 4.833 1.573 4.801 1.581 C 4.21 1.705 3.625 1.82 3.036 1.94 C 2.563 2.037 2.09 2.138 1.616 2.235 C 1.141 2.332 0.681 2.424 0.211 2.519 C 0.069 2.55 0.018 2.49 0 2.345 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "15px",
            color: "rgb(239,63,55)",
            flexShrink: 0,
          }}>{props.text3 ?? "99"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "rgb(144,144,144)",
          textDecoration: "line-through",
          flexShrink: 0,
        }}>{props.text4 ?? "888"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 139,
        top: 247.289,
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: "rgb(239,63,55)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "8px 4px 8px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={1.600} height={1.600} viewBox="0 0 1.600 1.600" fill="none" style={{
            position: "absolute",
            left: 4.263,
            top: 13.114,
            width: 1.6,
            height: 1.6,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 0.8 C 0 0.905 0.021 1.009 0.061 1.106 C 0.101 1.203 0.16 1.291 0.234 1.366 C 0.309 1.44 0.397 1.499 0.494 1.539 C 0.591 1.579 0.695 1.6 0.8 1.6 C 0.905 1.6 1.009 1.579 1.106 1.539 C 1.203 1.499 1.291 1.44 1.366 1.366 C 1.44 1.291 1.499 1.203 1.539 1.106 C 1.579 1.009 1.6 0.905 1.6 0.8 C 1.6 0.695 1.579 0.591 1.539 0.494 C 1.499 0.397 1.44 0.309 1.366 0.234 C 1.291 0.16 1.203 0.101 1.106 0.061 C 1.009 0.021 0.905 0 0.8 0 C 0.695 0 0.591 0.021 0.494 0.061 C 0.397 0.101 0.309 0.16 0.234 0.234 C 0.16 0.309 0.101 0.397 0.061 0.494 C 0.021 0.591 0 0.695 0 0.8 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={1.600} height={1.600} viewBox="0 0 1.600 1.600" fill="none" style={{
            position: "absolute",
            left: 10.343,
            top: 13.095,
            width: 1.6,
            height: 1.6,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 0 0.8 C 0 1.012 0.084 1.216 0.234 1.366 C 0.384 1.516 0.588 1.6 0.8 1.6 C 1.012 1.6 1.216 1.516 1.366 1.366 C 1.516 1.216 1.6 1.012 1.6 0.8 C 1.6 0.588 1.516 0.384 1.366 0.234 C 1.216 0.084 1.012 0 0.8 0 C 0.588 0 0.384 0.084 0.234 0.234 C 0.084 0.384 0 0.588 0 0.8 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={14.032} height={10.992} viewBox="0 0 14.032 10.992" fill="none" style={{
            position: "absolute",
            left: 0.984,
            top: 1.286,
            width: 14.032,
            height: 10.992,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 12.747 2.641 L 1.509 2.675 L 1.111 0.461 C 1.098 0.389 1.071 0.32 1.031 0.258 C 0.992 0.196 0.94 0.142 0.88 0.1 C 0.819 0.058 0.751 0.029 0.68 0.013 C 0.608 -0.003 0.533 -0.004 0.461 0.009 C 0.389 0.022 0.32 0.049 0.258 0.089 C 0.196 0.128 0.142 0.18 0.1 0.24 C 0.058 0.301 0.029 0.369 0.013 0.441 C -0.003 0.512 -0.004 0.587 0.009 0.659 L 0.371 2.679 L 0.368 2.679 L 1.694 10.198 C 1.733 10.421 1.85 10.623 2.023 10.768 C 2.197 10.913 2.416 10.992 2.642 10.992 L 11.352 10.965 C 11.56 10.964 11.762 10.896 11.928 10.77 C 12.094 10.645 12.215 10.468 12.272 10.268 L 13.982 4.271 C 14.215 3.452 13.599 2.638 12.747 2.641 Z M 12.905 3.964 L 11.228 9.845 L 2.773 9.871 L 1.702 3.795 L 12.75 3.76 C 12.775 3.76 12.8 3.765 12.822 3.776 C 12.845 3.787 12.864 3.804 12.878 3.824 C 12.894 3.843 12.904 3.866 12.909 3.891 C 12.914 3.915 12.912 3.941 12.905 3.964 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={6.400} height={1.136} viewBox="0 0 6.400 1.136" fill="none" style={{
            position: "absolute",
            left: 4.868,
            top: 8.769,
            width: 6.4,
            height: 1.136,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 5.832 0 L 0.552 0.016 C 0.404 0.018 0.264 0.079 0.161 0.184 C 0.057 0.289 0 0.431 0 0.578 C 0 0.725 0.059 0.867 0.163 0.971 C 0.267 1.076 0.408 1.135 0.555 1.136 L 5.835 1.12 C 5.909 1.121 5.983 1.107 6.051 1.079 C 6.12 1.051 6.182 1.009 6.235 0.957 C 6.287 0.905 6.329 0.843 6.357 0.774 C 6.386 0.706 6.4 0.632 6.4 0.558 C 6.4 0.484 6.385 0.411 6.356 0.343 C 6.327 0.274 6.285 0.212 6.232 0.161 C 6.18 0.109 6.117 0.068 6.048 0.04 C 5.979 0.013 5.906 -0.001 5.832 0 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Component12;
