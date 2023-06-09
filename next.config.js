/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    experimental: {
        // Required:
        appDir: true,
    },
    eslint: {
        dirs: ["src", "app", ""],

    },
};

module.exports = nextConfig;
