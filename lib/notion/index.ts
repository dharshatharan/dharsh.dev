import { Client, LogLevel } from "@notionhq/client";

let client: Client;

// Initializing a client
export const notionClient = () => {
  if (!client) {
    client = new Client({
      auth: process.env.NOTION_TOKEN,
      logLevel:
        process.env.NODE_ENV === "development"
          ? LogLevel.DEBUG
          : LogLevel.ERROR,
    });
  }
  return client;
};
