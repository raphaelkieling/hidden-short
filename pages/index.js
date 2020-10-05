import Head from "next/head";
import {
  Button,
  CircularProgress,
  createMuiTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  FormContainer,
  HeaderContainer,
  HeaderText,
  LogoImage,
  TextField,
  Header,
  GenerateButton,
  MainContainer,
  Navbar,
  AlertContainer,
  LoadingContainer,
} from "../styles/home";
import { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      setData({});
      setLoading(true);
      const { data } = await axios.post("/api/generate", {
        from,
        to,
      });

      setFrom("");
      setTo("");
      setData(data);
      setIsSuccess(true);
    } catch (err) {
      console.log("erro:", err.message);
      setData(err.response.data);
      setIsSuccess(false);
    } finally {
      setLoading(false);
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

        <MainContainer>
          <Navbar position="static">
            <Toolbar>
              <Typography variant="h6">Hidden Short</Typography>
            </Toolbar>
          </Navbar>

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
                {true ? (
                  <LoadingContainer>
                    <CircularProgress size={30} />
                  </LoadingContainer>
                ) : (
                  <GenerateButton
                    size="small"
                    variant="contained"
                    type="submit"
                  >
                    Generate
                  </GenerateButton>
                )}
              </FormContainer>

              {data && data.message && (
                <AlertContainer
                  action={
                    <CopyToClipboard text={data.url}>
                      <Button color="inherit" size="small">
                        Copy
                      </Button>
                    </CopyToClipboard>
                  }
                  severity={isSuccess ? "success" : "error"}
                >
                  {data.message}
                </AlertContainer>
              )}
            </HeaderContainer>
          </Header>
        </MainContainer>
      </div>
    </ThemeProvider>
  );
}
