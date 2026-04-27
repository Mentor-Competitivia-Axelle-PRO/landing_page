import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/Mentor-Competitivia-Axelle-PRO/landing_page/blob/main/public/hero-isidore.png",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/Mentor-Competitivia-Axelle-PRO/landing_page/blob/main/public/logo.png",
      },
    ],
  },
};

export default nextConfig;
