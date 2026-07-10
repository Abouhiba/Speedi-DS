// figma node: 1:24 输入框
export function Component2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 85,
      height: 44,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 85,
        height: 44,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(231,231,231)",
      }} />
    </div>
  );
}
export default Component2;
