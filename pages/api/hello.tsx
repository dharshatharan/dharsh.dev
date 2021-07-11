import { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";

const Hello = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};

export default withSentry(Hello);
