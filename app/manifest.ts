import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tekly | Multi-Channel Customer Engagement Platform",
    short_name: "Tekly",
    description: "Tekly helps businesses automate customer conversations, manage relationships, and simplify communication from one unified platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/logo.jpeg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
