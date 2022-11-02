process.env.NEXTAUTH_URL = "http://localhost:3000";
process.env.NEXTAUTH_URL_INTERNAL = "http://127.0.0.1:3000";
process.env.NEXTAUTH_SECRET = "secret";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
