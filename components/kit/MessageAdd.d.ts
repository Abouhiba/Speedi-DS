import * as React from 'react';
export interface MessageAddProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}
export declare const MessageAdd: React.FC<MessageAddProps>;
export default MessageAdd;
