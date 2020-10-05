import { firestore } from "../../utils/firebase";

export default async (req, res) => {
  try {
    const { code } = req.body;

    await firestore.collection("history").add({
      urlUid: code,
      date: new Date().toISOString(),
    });

    res.statusCode = 200;
    res.json({ message: "Redirect saved" });
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.json({ message: "Problem on save redirect" });
  }
};
