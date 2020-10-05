// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "../../utils/firebase";
import scrapy from "html-metadata";
import { absoluteUrl } from "../../utils";

export default async (req, res) => {
  try {
    const { from, to } = req.body;

    const { openGraph } = await scrapy(from);
    const { origin } = absoluteUrl(req, "localhost:3000");

    const data = await firestore.collection("urls").add({
      from,
      to,
      fromMetadata: {
        title: openGraph.title,
        image: openGraph.image.url,
      },
      date: new Date().toISOString(),
    });

    const finalUrl = `${origin}/go/${data.id}`;
    res.statusCode = 200;
    res.json({
      url: finalUrl,
      message: `Url created: ${finalUrl}`,
    });
  } catch (err) {
    res.statusCode = 500;
    res.json({
      message: "Error on generate a url",
    });
  }
};
