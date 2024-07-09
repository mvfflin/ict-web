/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.discordapp.net",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
    },
    // reactStrictMode: true,
    webpack: (config) => {
        return config;
    },
    experimental: {
        esmExternals: "loose",
        serverComponentsExternalPackages: ["mongoose"],
        // serverActions: true,
    },
};

export default nextConfig;
