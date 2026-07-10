// figma node: 3:252 关闭
export function Component6(_p = {}) {
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
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(231,231,231)",
      }} />
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 26,
        height: 26,
        borderRadius: 100,
        backgroundColor: "rgb(231,231,231)",
      }} />
    </div>
  );
}
export default Component6;
