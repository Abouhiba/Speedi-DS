import { NavigationBar } from './NavigationBar.jsx';

// figma node: 3:3808 商品详情top
export function Top(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 750,
      height: 92,
      position: "relative",
      color: "rgb(48,48,48)",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 750,
          height: 92,
        }}>
        <NavigationBar
          style={{ transform: "scale(1.923, 1.917)", transformOrigin: "0 0" }}
          text2={"        Checkout"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 600,
        top: 27,
        width: 40,
        height: 35,
        overflow: "hidden",
      }}>
        <svg width={40} height={35} viewBox="0 0 40 35" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 40,
          height: 35,
        }}>
          <path d={"M 11.207 3.345 C 6.874 3.345 3.348 7.043 3.348 11.589 C 3.348 14.388 4.721 16.405 6.054 18.365 C 9.278 23.127 17.365 29.488 20.044 31.448 C 22.518 29.619 30.671 23.194 34.023 18.385 L 34.147 18.191 C 35.379 16.264 36.652 14.278 36.652 11.589 C 36.652 7.04 33.082 3.345 28.702 3.345 C 26.379 3.345 24.088 4.478 22.572 6.375 L 19.916 9.692 L 17.308 6.334 C 16.589 5.402 15.665 4.647 14.607 4.128 C 13.549 3.61 12.386 3.342 11.207 3.345 Z M 11.207 0 C 12.897 -0.004 14.565 0.38 16.082 1.123 C 17.599 1.866 18.925 2.948 19.956 4.284 C 22.049 1.666 25.24 0 28.702 0 C 34.987 0 40 5.237 40 11.589 C 40 15.398 38.178 18.097 36.809 20.237 C 32.526 26.428 21.959 34.207 21.503 34.525 C 21.082 34.836 20.571 35.002 20.047 35 C 19.522 35.003 19.01 34.837 18.587 34.525 C 18.132 34.207 7.47 26.431 3.281 20.237 C 1.822 18.097 0 15.398 0 11.589 C 0 5.237 5.013 0 11.207 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 685,
        top: 27,
        width: 35,
        height: 35,
        overflow: "hidden",
      }}>
        <svg width={35} height={35} viewBox="0 0 35 35" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 35,
          height: 35,
        }}>
          <path d={"M 34.75 14.075 L 22.25 0.374 C 21.75 -0.125 21 -0.125 20.5 0.374 C 20 0.872 20 1.121 20 1.619 L 20 8.843 C 9.75 8.843 0 17.313 0 27.527 C 0 30.267 1.25 33.754 2.5 35 C 4 27.278 11.75 21.299 20 21.299 L 20 28.772 C 20 29.021 20 29.27 20.25 29.769 C 20.75 30.267 21.75 30.018 22 29.769 L 34.5 16.317 C 35 15.818 35 15.32 35 15.071 C 35 14.822 35 14.324 34.75 14.075 L 34.75 14.075 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Top;
