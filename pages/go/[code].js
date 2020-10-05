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

function Go({ fromMetadata }) {
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
              <Button size="small" color="primary">
                Go
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

Go.getInitialProps = async ({ query }) => {
  const { code } = query;
  const { data } = await axios.get(
    `${process.env.API_URL}/get_info?code=${code}`
  );

  return data;
};

export default Go;
