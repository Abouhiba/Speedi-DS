import { Choose1 } from './Choose1.jsx';

// figma node: 3:999 Component 15
export function Component15(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 750,
      height: 108,
      position: "relative",
      color: "rgb(239,63,55)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 750,
        height: 108,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1.923px solid rgb(231,231,231)",
        borderRight: "1.923px solid rgb(231,231,231)",
        borderBottom: "1.923px solid rgb(231,231,231)",
        borderLeft: "1.923px solid rgb(231,231,231)",
      }} />
      <div style={{
          position: "absolute",
          left: 31,
          top: 31,
          width: 46,
          height: 46,
        }}>{props.icon1 ?? <Choose1 style={{ transform: "scale(1.917, 1.917)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "absolute",
        left: 309,
        top: 18,
        width: 200.385,
        height: 42,
        display: "grid",
        gridTemplateRows: "1px",
        gridTemplateColumns: "1px 1px 1px",
        gap: "7.692px 7.692px",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          gridRow: "1",
          gridColumn: "1",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 31,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "42px",
            color: "rgb(48,48,48)",
            flexShrink: 0,
          }}>{props.text1 ?? "Total: "}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 19,
          padding: "6px 0px 6px 0px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          gridRow: "1",
          gridColumn: "2",
        }}>
          <div style={{
            position: "relative",
            width: 27,
            height: 27,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 25,
              height: 25,
            }}>
              <path d={"M 11.739 0 C 11.75 0.229 11.766 0.396 11.766 0.563 C 11.766 4.565 11.766 8.567 11.766 12.568 C 11.766 13.105 11.797 13.126 12.326 13.014 C 13.04 12.856 13.758 12.729 14.465 12.558 C 14.584 12.53 14.693 12.368 14.757 12.243 C 14.784 12.132 14.788 12.016 14.768 11.903 C 14.768 9.324 14.768 6.743 14.768 4.165 C 14.756 4.018 14.779 3.87 14.835 3.733 C 14.892 3.597 14.98 3.475 15.093 3.376 C 15.805 2.794 16.519 2.216 17.236 1.642 C 17.355 1.567 17.479 1.501 17.609 1.444 C 17.627 1.671 17.649 1.833 17.649 1.997 C 17.649 5.08 17.649 8.164 17.649 11.248 C 17.649 11.364 17.649 11.479 17.649 11.594 C 17.662 11.806 17.763 11.909 17.998 11.854 C 19.565 11.522 21.133 11.192 22.701 10.865 C 23.352 10.728 24.021 10.612 24.678 10.474 C 24.961 10.415 25.038 10.541 24.981 10.768 C 24.787 11.543 24.587 12.319 24.371 13.088 C 24.291 13.375 24.081 13.501 23.757 13.561 C 22.356 13.829 20.965 14.139 19.569 14.431 C 19.12 14.524 18.668 14.609 18.216 14.683 C 17.728 14.762 17.641 14.85 17.641 15.329 C 17.641 15.995 17.641 16.658 17.641 17.323 C 17.641 17.705 17.737 17.773 18.105 17.695 C 19.871 17.332 21.637 16.969 23.403 16.608 C 23.806 16.524 24.205 16.423 24.605 16.329 C 24.829 16.275 25.06 16.275 24.986 16.576 C 24.781 17.407 24.552 18.231 24.299 19.05 C 24.262 19.128 24.207 19.197 24.14 19.253 C 24.073 19.309 23.994 19.35 23.909 19.374 C 23.248 19.541 22.578 19.675 21.909 19.812 C 20.489 20.104 19.068 20.389 17.646 20.678 C 16.792 20.851 15.938 21.021 15.085 21.206 C 14.76 21.275 14.76 21.088 14.76 20.878 C 14.76 19.249 14.76 17.62 14.76 15.992 C 14.76 15.448 14.721 15.416 14.174 15.528 C 13.458 15.673 12.747 15.831 12.03 15.965 C 11.768 16.014 11.758 16.178 11.758 16.37 C 11.758 17.264 11.745 18.159 11.758 19.05 C 11.773 19.486 11.642 19.916 11.384 20.274 C 10.943 20.897 10.513 21.535 10.082 22.153 C 9.873 22.473 9.598 22.746 9.274 22.957 C 8.95 23.168 8.584 23.311 8.2 23.378 C 7.007 23.596 5.829 23.89 4.642 24.138 C 3.753 24.324 2.852 24.48 1.967 24.658 C 1.459 24.759 0.956 24.888 0.447 24.973 C 0.021 25.05 -0.064 24.973 0.04 24.573 C 0.229 23.856 0.442 23.143 0.646 22.428 C 0.68 22.291 0.758 22.168 0.867 22.076 C 0.977 21.983 1.113 21.925 1.257 21.911 C 2.722 21.625 4.166 21.305 5.621 21.004 C 6.489 20.824 7.356 20.653 8.224 20.489 C 8.789 20.38 8.816 20.358 8.816 19.798 C 8.816 18.881 8.816 17.963 8.816 17.046 C 8.816 16.747 8.742 16.644 8.402 16.72 C 6.872 17.056 5.338 17.368 3.802 17.684 C 3.122 17.825 2.439 17.949 1.758 18.091 C 1.516 18.142 1.361 18.102 1.433 17.831 C 1.651 17.003 1.871 16.176 2.125 15.359 C 2.163 15.28 2.218 15.209 2.287 15.153 C 2.356 15.096 2.437 15.055 2.525 15.032 C 4.188 14.682 5.852 14.357 7.518 14.029 C 7.816 13.969 8.114 13.898 8.413 13.843 C 8.712 13.788 8.823 13.616 8.821 13.312 C 8.821 9.792 8.821 6.272 8.812 2.751 C 8.807 2.621 8.829 2.491 8.876 2.37 C 8.924 2.249 8.997 2.138 9.09 2.044 C 9.768 1.307 10.552 0.667 11.418 0.145 C 11.501 0.096 11.595 0.065 11.739 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={12} height={6} viewBox="0 0 12 6" fill="none" style={{
              position: "absolute",
              left: 15,
              top: 21,
              width: 12,
              height: 6,
            }}>
              <path d={"M 0 5.567 C 0.308 4.551 0.608 3.531 0.939 2.52 C 0.977 2.4 1.18 2.292 1.319 2.259 C 3.138 1.854 4.963 1.467 6.784 1.068 C 8.172 0.763 9.555 0.443 10.943 0.135 C 11.21 0.066 11.482 0.02 11.757 0 C 11.838 0 12.006 0.174 12 0.259 C 11.903 1.381 11.612 2.476 11.141 3.494 C 11.103 3.558 11.053 3.614 10.993 3.659 C 10.934 3.703 10.866 3.735 10.795 3.753 C 9.464 4.047 8.149 4.32 6.826 4.605 C 5.761 4.835 4.699 5.075 3.632 5.306 C 2.566 5.536 1.532 5.755 0.473 5.981 C 0.156 6.055 0.04 5.912 0 5.567 Z"} fill="currentColor" fillRule="nonzero" />
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
          gridRow: "1",
          gridColumn: "3",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 31,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "42px",
            color: "rgb(239,63,55)",
            flexShrink: 0,
          }}>{props.text2 ?? "59.9"}</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 201,
        top: 63,
        width: 307.385,
        height: 31,
        display: "grid",
        gridTemplateRows: "1px",
        gridTemplateColumns: "1px 1px 1px",
        gap: "7.692px 7.692px",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          gridRow: "1",
          gridColumn: "1",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 23,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "31px",
            color: "rgb(239,63,55)",
            flexShrink: 0,
          }}>{props.text3 ?? "discount: "}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 19,
          padding: "6px 0px 6px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          gridRow: "1",
          gridColumn: "2",
        }}>
          <div style={{
            position: "relative",
            width: 17,
            height: 19,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={17} height={17} viewBox="0 0 17 17" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 17,
              height: 17,
            }}>
              <path d={"M 7.982 0 C 7.99 0.155 8.001 0.269 8.001 0.383 C 8.001 3.105 8.001 5.826 8.001 8.546 C 8.001 8.912 8.022 8.926 8.382 8.849 C 8.867 8.742 9.355 8.655 9.836 8.54 C 9.917 8.52 9.991 8.41 10.035 8.325 C 10.053 8.249 10.056 8.171 10.042 8.094 C 10.042 6.34 10.042 4.586 10.042 2.832 C 10.034 2.732 10.05 2.632 10.088 2.539 C 10.126 2.446 10.186 2.363 10.264 2.296 C 10.747 1.9 11.233 1.507 11.721 1.117 C 11.801 1.066 11.886 1.02 11.974 0.982 C 11.986 1.136 12.002 1.247 12.002 1.358 C 12.002 3.455 12.002 5.552 12.002 7.649 C 12.002 7.727 12.002 7.805 12.002 7.884 C 12.01 8.028 12.079 8.098 12.238 8.061 C 13.304 7.835 14.37 7.611 15.437 7.388 C 15.879 7.295 16.334 7.216 16.781 7.123 C 16.974 7.082 17.026 7.168 16.987 7.322 C 16.855 7.849 16.719 8.377 16.572 8.9 C 16.518 9.095 16.375 9.181 16.155 9.221 C 15.202 9.404 14.256 9.615 13.307 9.813 C 13.002 9.876 12.694 9.934 12.387 9.985 C 12.055 10.038 11.996 10.098 11.996 10.424 C 11.996 10.876 11.996 11.328 11.996 11.78 C 11.996 12.039 12.061 12.085 12.311 12.033 C 13.512 11.786 14.713 11.539 15.914 11.293 C 16.188 11.237 16.459 11.168 16.731 11.104 C 16.884 11.067 17.041 11.067 16.99 11.272 C 16.851 11.836 16.695 12.397 16.523 12.954 C 16.498 13.007 16.461 13.054 16.415 13.092 C 16.369 13.13 16.316 13.158 16.258 13.174 C 15.809 13.288 15.353 13.379 14.898 13.472 C 13.932 13.671 12.966 13.865 11.999 14.061 C 11.419 14.179 10.838 14.295 10.258 14.42 C 10.037 14.467 10.037 14.34 10.037 14.197 C 10.037 13.089 10.037 11.982 10.037 10.874 C 10.037 10.504 10.01 10.483 9.638 10.559 C 9.152 10.658 8.668 10.765 8.18 10.856 C 8.002 10.889 7.995 11.001 7.995 11.131 C 7.995 11.739 7.987 12.348 7.995 12.954 C 8.006 13.251 7.916 13.543 7.741 13.787 C 7.441 14.21 7.149 14.644 6.856 15.064 C 6.714 15.281 6.527 15.468 6.306 15.611 C 6.086 15.754 5.837 15.852 5.576 15.897 C 4.765 16.045 3.964 16.245 3.156 16.414 C 2.552 16.54 1.939 16.646 1.337 16.767 C 0.992 16.836 0.65 16.924 0.304 16.982 C 0.014 17.034 -0.043 16.982 0.027 16.71 C 0.156 16.222 0.301 15.737 0.439 15.251 C 0.463 15.158 0.515 15.074 0.59 15.011 C 0.664 14.949 0.757 14.909 0.855 14.899 C 1.851 14.705 2.833 14.488 3.822 14.283 C 4.412 14.161 5.002 14.044 5.592 13.932 C 5.976 13.858 5.995 13.843 5.995 13.463 C 5.995 12.839 5.995 12.215 5.995 11.591 C 5.995 11.388 5.944 11.318 5.713 11.369 C 4.673 11.598 3.63 11.81 2.585 12.025 C 2.123 12.121 1.658 12.206 1.196 12.302 C 1.031 12.336 0.926 12.309 0.974 12.125 C 1.123 11.562 1.272 11 1.445 10.444 C 1.471 10.39 1.508 10.342 1.555 10.304 C 1.602 10.265 1.657 10.237 1.717 10.221 C 2.848 9.983 3.979 9.763 5.112 9.54 C 5.315 9.499 5.517 9.451 5.721 9.413 C 5.924 9.376 6 9.259 5.998 9.052 C 5.998 6.659 5.998 4.265 5.992 1.87 C 5.988 1.782 6.003 1.694 6.036 1.612 C 6.068 1.529 6.118 1.454 6.181 1.39 C 6.642 0.888 7.175 0.453 7.764 0.099 C 7.821 0.065 7.885 0.044 7.982 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
              position: "absolute",
              left: 9,
              top: 15,
              width: 8,
              height: 4,
            }}>
              <path d={"M 0 3.711 C 0.205 3.034 0.406 2.354 0.626 1.68 C 0.651 1.6 0.787 1.528 0.879 1.506 C 2.092 1.236 3.309 0.978 4.523 0.712 C 5.448 0.508 6.37 0.296 7.295 0.09 C 7.473 0.044 7.655 0.014 7.838 0 C 7.892 0 8.004 0.116 8 0.173 C 7.935 0.92 7.741 1.651 7.427 2.329 C 7.402 2.372 7.368 2.41 7.329 2.439 C 7.289 2.469 7.244 2.49 7.196 2.502 C 6.309 2.698 5.433 2.88 4.551 3.07 C 3.841 3.224 3.133 3.384 2.422 3.537 C 1.711 3.691 1.021 3.836 0.316 3.987 C 0.104 4.037 0.027 3.941 0 3.711 Z"} fill="currentColor" fillRule="nonzero" />
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
          gridRow: "1",
          gridColumn: "3",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 23,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "31px",
            color: "rgb(239,63,55)",
            flexShrink: 0,
          }}>{props.text4 ?? "100.00 | Details"}</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 527,
        top: 15,
        width: 192,
        height: 77,
        borderRadius: 15,
        backgroundColor: "rgb(239,63,55)",
      }} />
      <span style={{
        position: "absolute",
        left: 536,
        top: 39,
        width: 173,
        height: 31,
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 31,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "31px",
        color: "rgb(255,255,255)",
      }}>Checkout</span>
    </div>
  );
}
export default Component15;
