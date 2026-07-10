import { MessageAdd } from './MessageAdd.jsx';

// figma node: 4:16787 message-add
export function MessageAdd2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <MessageAdd property1={"outline"} />}</div>
    </div>
  );
}
export default MessageAdd2;
