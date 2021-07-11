import { NextApiRequest, NextApiResponse } from "next";

const Hello = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};

export default Hello;
