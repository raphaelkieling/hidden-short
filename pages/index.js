import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {
  FormContainer,
  HeaderContainer,
  HeaderText,
  LogoImage,
  TextField,
  Header,
  GenerateButton,
} from "../styles/home";
import { useState } from "react";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffffff",
    },
  },
});

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { data } = await axios.post("/api/generate", {
        from,
        to,
      });

      setFrom("");
      setTo("");
      setSuccessMessage(data.message);
    } catch (err) {
      console.log("erro:", err.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Hidden Short</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>

        <Header>
          <HeaderContainer>
            <LogoImage src="/assets/logo.svg" />
            <HeaderText>
              A way to hide url that you not want show to others.
            </HeaderText>
            <FormContainer onSubmit={handleSubmit}>
              <TextField
                value={from}
                onChange={(ev) => setFrom(ev.target.value)}
                size="small"
                label="Url to show"
                variant="outlined"
              />
              <TextField
                value={to}
                onChange={(ev) => setTo(ev.target.value)}
                size="small"
                label="Url to hide"
                variant="outlined"
              />
              <GenerateButton size="small" variant="contained" type="submit">
                Generate
              </GenerateButton>
            </FormContainer>
            {successMessage}
          </HeaderContainer>
        </Header>
      </div>
    </ThemeProvider>
  );
}
