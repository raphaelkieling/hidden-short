// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "../../utils/firebase";
import scrapy from "html-metadata";

export default async (req, res) => {
  const { from, to } = req.body;

  const { openGraph } = await scrapy(from);

  const data = await firestore.collection("urls").add({
    from,
    to,
    fromMetadata: {
      title: openGraph.title,
      image: openGraph.image.url,
    },
    date: new Date().toISOString(),
  });

  res.statusCode = 200;
  res.json({ message: `Url criada em ${process.env.FRONT_URL}/go/${data.id}` });
};
