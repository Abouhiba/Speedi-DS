// figma node: 3:441 search
export function Search(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 30,
        display: "flex",
        flexDirection: "row",
        padding: "10px 10px 10px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,0.707,-0.707,0,17.500)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          color: "rgb(48,48,48)",
        }}>
          <path d={"M 10.756 0 L 1.243 0 C 0.557 0 0 0.557 0 1.244 L 0 10.721 C 0 11.39 0.514 11.973 1.183 11.999 C 1.894 12.033 2.485 11.458 2.485 10.755 L 2.485 3.088 C 2.485 2.753 2.751 2.487 3.085 2.487 L 10.722 2.487 C 11.39 2.487 11.973 1.973 11.999 1.304 C 12.033 0.583 11.459 0 10.756 0 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(239,63,55)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 3px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 35,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "1px 6px 1px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15} height={17} viewBox="0 0 15 17" fill="none" style={{
            position: "relative",
            width: 15,
            height: 17,
            flexShrink: 0,
            color: "rgb(144,144,144)",
          }}>
            <path d={"M 12.338 12.14 L 14.73 15.056 C 14.927 15.297 15.022 15.607 14.996 15.92 C 14.969 16.233 14.822 16.521 14.587 16.723 C 14.471 16.823 14.337 16.898 14.192 16.945 C 14.047 16.992 13.895 17.009 13.744 16.996 C 13.439 16.968 13.157 16.818 12.96 16.577 L 10.526 13.607 C 7.609 15.27 3.866 14.647 1.65 11.944 C -0.863 8.878 -0.46 4.297 2.55 1.711 C 5.559 -0.875 10.036 -0.486 12.549 2.581 C 14.855 5.395 14.706 9.486 12.338 12.14 Z M 3.202 10.61 C 4.999 12.804 8.202 13.081 10.354 11.233 C 12.505 9.384 12.794 6.108 10.997 3.914 C 9.2 1.722 5.998 1.443 3.846 3.291 C 1.693 5.141 1.406 8.418 3.202 10.611 L 3.202 10.61 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 219,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(144,144,144)",
            flexShrink: 0,
          }}>{props.text1 ?? "Search for Products"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 36,
          display: "flex",
          flexDirection: "column",
          padding: "0px 8px 0px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg height={16} viewBox="0 0 20 16" fill="none" style={{
            position: "relative",
            height: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(144,144,144)",
          }}>
            <path d={"M 3.114 2.731 L 4.842 2.731 L 4.842 11.519 L 3.114 11.519 L 3.114 2.731 Z M 5.665 2.731 L 6.529 2.731 L 6.529 11.519 L 5.665 11.519 L 5.665 2.731 Z M 7.393 2.731 L 8.257 2.731 L 8.257 11.519 L 7.393 11.519 L 7.393 2.731 Z M 9.985 2.731 L 10.849 2.731 L 10.849 11.519 L 9.985 11.519 L 9.985 2.731 Z M 13.43 2.731 L 14.294 2.731 L 14.294 11.519 L 13.43 11.519 L 13.43 2.731 Z M 16.022 2.731 L 16.886 2.731 L 16.886 11.519 L 16.022 11.519 L 16.022 2.731 Z M 11.713 2.731 L 12.145 2.731 L 12.145 11.519 L 11.713 11.519 L 11.713 2.731 Z M 9.121 2.731 L 9.553 2.731 L 9.553 11.519 L 9.121 11.519 L 9.121 2.731 Z M 14.726 2.731 L 15.158 2.731 L 15.158 11.519 L 14.726 11.519 L 14.726 2.731 Z M 3.114 12.399 L 3.978 12.399 L 3.978 13.279 L 3.114 13.279 L 3.114 12.399 Z M 5.665 12.399 L 6.529 12.399 L 6.529 13.279 L 5.665 13.279 L 5.665 12.399 Z M 7.393 12.399 L 8.257 12.399 L 8.257 13.279 L 7.393 13.279 L 7.393 12.399 Z M 11.713 12.399 L 12.577 12.399 L 12.577 13.279 L 11.713 13.279 L 11.713 12.399 Z M 16.022 12.399 L 16.886 12.399 L 16.886 13.279 L 16.022 13.279 L 16.022 12.399 Z M 13.43 12.399 L 15.158 12.399 L 15.158 13.279 L 13.43 13.279 L 13.43 12.399 Z M 9.121 12.399 L 10.849 12.399 L 10.849 13.279 L 9.121 13.279 L 9.121 12.399 Z M 1.236 4.583 L 0 4.583 L 0 1.821 C 0 0.818 0.804 0 1.788 0 L 4.5 0 L 4.5 1.258 L 1.788 1.258 C 1.477 1.258 1.236 1.514 1.236 1.821 L 1.236 4.583 Z M 4.5 16 L 1.788 16 C 0.804 16 0 15.182 0 14.179 L 0 11.417 L 1.236 11.417 L 1.236 14.179 C 1.236 14.496 1.487 14.742 1.788 14.742 L 4.5 14.742 L 4.5 16 Z M 18.212 16 L 15.5 16 L 15.5 14.742 L 18.212 14.742 C 18.523 14.742 18.764 14.486 18.764 14.179 L 18.764 11.57 L 20 11.57 L 20 14.179 C 20 15.192 19.196 16 18.212 16 Z M 20 4.583 L 18.764 4.583 L 18.764 1.821 C 18.764 1.504 18.513 1.258 18.212 1.258 L 15.5 1.258 L 15.5 0 L 18.212 0 C 19.196 0 20 0.818 20 1.821 L 20 4.583 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 35,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 17.25,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 8,
            height: 8,
            borderRadius: 3,
            boxShadow: "inset 0 0 0 1.500px rgb(48,48,48)",
          }} />
          <div style={{
            position: "absolute",
            left: 10,
            top: 0,
            width: 8,
            height: 12,
            borderRadius: 3,
            boxShadow: "inset 0 0 0 1.500px rgb(48,48,48)",
          }} />
          <div style={{
            position: "absolute",
            left: 10,
            top: 13.25,
            width: 8,
            height: 4,
            borderRadius: 3,
            boxShadow: "inset 0 0 0 1.500px rgb(48,48,48)",
          }} />
          <div style={{
            position: "absolute",
            left: 0,
            top: 9.25,
            width: 8,
            height: 8,
            borderRadius: 3,
            boxShadow: "inset 0 0 0 1.500px rgb(48,48,48)",
          }} />
        </div>
      </div>
    </div>
  );
}
export default Search;
