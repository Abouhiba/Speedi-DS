// figma node: 1:34 已输入
export function Component4(_p = {}) {
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
        backgroundColor: "rgb(247,247,247)",
        boxShadow: "inset 0 0 0 1px rgb(85,85,85)",
      }} />
    </div>
  );
}
export default Component4;
