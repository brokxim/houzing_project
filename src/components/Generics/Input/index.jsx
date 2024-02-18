import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

const Input = forwardRef(
  (
    {
      icon,
      type,
      width,
      height,
      onChange,
      placeholder,
      name,
      value,
      defaultValue,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          $icon={true}
          width={width}
          height={height}
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Wrapper>
    );
  }
);
export default Input;
