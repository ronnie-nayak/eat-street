/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/db", "@repo/atoms"],

  eslint: { ignoreDuringBuilds: true },
};
