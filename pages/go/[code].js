import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import Head from "next/head";
import { absoluteUrl } from "../../utils/index";

function Go({ fromMetadata, to, code }) {
  const handleGoTo = async () => {
    await axios.post("/api/save_redirect_history", {
      code,
    });

    window.location.replace(to);
  };

  return (
    <div>
      <Head>
        <meta data-rh="true" property="og:title" content={fromMetadata.title} />
        <meta data-rh="true" property="og:image" content={fromMetadata.image} />
      </Head>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card style={{ width: "300px" }}>
            <CardActionArea>
              <CardMedia
                style={{ height: "300px" }}
                image={fromMetadata.image}
                title={fromMetadata.title}
              />
              <CardContent>
                <Typography>{fromMetadata.title}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={handleGoTo}>
                Go
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

Go.getInitialProps = async ({ query, req }) => {
  const { origin } = absoluteUrl(req, "localhost:3000");
  const { code } = query;
  const { data } = await axios.get(`${origin}/api/get_info?code=${code}`);
  return { ...data, code };
};

export default Go;
