import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tekly Customer Engagement Platform",
    short_name: "Tekly",
    description: "Unify customer channels and automate Instagram responses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#581c87",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
