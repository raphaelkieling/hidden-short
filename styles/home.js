import { Button, TextField as TextFieldOriginal } from "@material-ui/core";
import styled from "styled-components";
import { BaseContainer } from "./base";

export const Header = styled.div`
  background: #303030;
  padding: 40px 0;
`;

export const HeaderContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const HeaderText = styled.p`
  color: white;
`;

export const LogoImage = styled.img`
  height: 60px;
`;

export const FormContainer = styled.form`
  display: flex;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const TextField = styled(TextFieldOriginal)`
  &&& {
    flex: 1;
    margin-left: 5px;
  }

  @media (max-width: 500px) {
    &&& {
      margin-left: 0px;
    }
  }
`;

export const GenerateButton = styled(Button)`
  &&& {
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    &&& {
      margin-top: 20px;
      margin-left: 0px;
    }
  }
`;
