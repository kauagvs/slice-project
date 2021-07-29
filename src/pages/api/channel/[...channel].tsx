import { NextApiRequest, NextApiResponse } from "next";

const channelHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { channel },
      method
    } = req;

    switch (method) {
      case "GET":
        const YOUTUBE_SEARCH_API =
          "https://youtube.googleapis.com/youtube/v3/search";
        const url = `${YOUTUBE_SEARCH_API}?part=snippet&channelId=${channel}&key=${process.env.YOUTUBE_API_KEY}`;
        const apiResponse = await fetch(url);
        res.status(200).json(await apiResponse.json());
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default channelHandler;
