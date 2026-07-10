import * as React from 'react';
export type IconName =
  | "AddProperty1Bold"
  | "AddProperty1Broken"
  | "AddProperty1Bulk"
  | "AddProperty1Linear"
  | "AddProperty1Outline"
  | "AddProperty1Twotone"
  | "ArrowSquareDownProperty1Bold"
  | "ArrowSquareDownProperty1Broken"
  | "ArrowSquareDownProperty1Bulk"
  | "ArrowSquareDownProperty1Linear"
  | "ArrowSquareDownProperty1Outline"
  | "ArrowSquareDownProperty1Twotone"
  | "LocationProperty1Bold"
  | "LocationProperty1Broken"
  | "LocationProperty1Bulk"
  | "LocationProperty1Linear"
  | "LocationProperty1Outline"
  | "LocationProperty1Twotone"
  | "MessageAddProperty1Bold"
  | "MessageAddProperty1Broken"
  | "MessageAddProperty1Bulk"
  | "MessageAddProperty1Linear"
  | "MessageAddProperty1Outline"
  | "MessageAddProperty1Twotone"
  | "MinusProperty1Bold"
  | "MinusProperty1Broken"
  | "MinusProperty1Bulk"
  | "MinusProperty1Linear"
  | "MinusProperty1Outline"
  | "MinusProperty1Twotone"
  | "TagTypeGreeen"
  | "TagTypeRed";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
