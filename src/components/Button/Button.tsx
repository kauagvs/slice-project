import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  primary?: boolean;

  label: string;

  onClick?: () => void;
}

export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  const mode = primary ? "primary" : "secondary";

  return (
    <StyledButton color={mode} type="button" {...props}>
      {label}
    </StyledButton>
  );
};
