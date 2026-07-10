// figma node: 1:2 顶部状态栏
export function Component(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 390,
        height: 44,
        backgroundColor: "rgb(255,255,255)",
      }} />
      <div className="fig-asset-d9603b580276cd9d" style={{
        position: "absolute",
        left: 45,
        top: 19,
        width: 321,
        height: 14,
      }} />
    </div>
  );
}
export default Component;
