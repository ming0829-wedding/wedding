import { IconButton as MuiIconButton } from "@mui/material";
import styled from "styled-components";

export default function IconButton({ children, ...props }) {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
}

const StyledIconButton = styled(MuiIconButton)`
  width: 34px;
  height: 34px;
  padding: 4px !important;
`;
