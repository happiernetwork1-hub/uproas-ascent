import { createFileRoute } from "@tanstack/react-router";

import { UproasPage } from "@/components/uproas-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Facebook Advertising Agency | UPROAS" },
      { name: "description", content: "UPROAS builds and optimises Facebook advertising campaigns for ambitious businesses ready to scale." },
      { property: "og:title", content: "Facebook Advertising Agency | UPROAS" },
      { property: "og:description", content: "Battle-tested Facebook advertising strategies for ambitious businesses ready to scale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UproasPage,
});
