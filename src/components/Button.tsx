import { ReactNode } from "react";

type Props = {
  children: ReactNode,
  primary?: boolean,
  secondary?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  outline?: boolean,
  rounded?: boolean
}

function Button({ children }: Props) {
  return <button>{children}</button>;
}

export default Button;
