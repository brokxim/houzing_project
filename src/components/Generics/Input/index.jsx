import React from "react";
import { Container } from "./style";
export const Input = ({
  children,
  type,
  width,
  height,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
}) => {
  return (
    <Container
      width={width}
      height={height}
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default Input;
