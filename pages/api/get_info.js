import { firestore } from "../../utils/firebase";

export default async (req, res) => {
  const { code } = req.query;

  const data = await firestore.collection("urls").doc(code).get();
  const doc = await data.data();
  res.send(doc);
};
