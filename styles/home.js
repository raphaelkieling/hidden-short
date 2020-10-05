import {
  AppBar,
  Button,
  TextField as TextFieldOriginal,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import styled from "styled-components";
import { BaseContainer } from "./base";

export const Header = styled.div`
  background: #303030;
  padding: 40px 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
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
    margin-right: 5px;
  }

  @media (max-width: 500px) {
    &&& {
      margin-top: 10px;
      margin-right: 0px;
    }
  }
`;

export const GenerateButton = styled(Button)`
  @media (max-width: 500px) {
    &&& {
      margin-top: 20px;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Navbar = styled(AppBar)``;

export const AlertContainer = styled(Alert)`
  &&& {
    margin-top: 10px;
    width: 100%;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    &&& {
      margin-top: 10px;
    }
  }
`;
