/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  env: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    CONTACT_WHATSAPP: process.env.CONTACT_WHATSAPP,
  },
};

module.exports = nextConfig;
