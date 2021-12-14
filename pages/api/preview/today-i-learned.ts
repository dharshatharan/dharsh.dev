import { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";
import { getTodayILearnedById } from "@lib/notion/todayILearned";

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== "MY_SECRET_TOKEN" || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getTodayILearnedById would implement the required fetching logic to the headless CMS
  if (typeof req.query.slug === "string") {
    const post = await getTodayILearnedById(req.query.slug);

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!post || !post.url) {
      return res.status(401).json({ message: "Invalid slug" });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.redirect("http://" + req.headers.host + `/today-i-learned/${post.id}`);
  }
};

export default withSentry(preview);
