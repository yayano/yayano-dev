import withMDX from "@next/mdx";

const nextConfig = withMDX()({
  pageExtensions: ["ts", "tsx", "mdx"],
});

export default nextConfig;
