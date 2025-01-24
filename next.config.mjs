/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    output: 'export', // This will make our build static

    images: {
        unoptimized: true, // Image optimization is disabled in static builds
    }
};

export default nextConfig;