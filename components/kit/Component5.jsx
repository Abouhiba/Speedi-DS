// figma node: 3:243 开启
export function Component5(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 60,
      height: 30,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 60,
        height: 30,
        borderRadius: 100,
        backgroundColor: "rgb(239,63,55)",
      }} />
      <div style={{
        position: "absolute",
        left: 32,
        top: 2,
        width: 26,
        height: 26,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
      }} />
    </div>
  );
}
export default Component5;
