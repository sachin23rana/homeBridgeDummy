// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Ensure consistent rendering between server and client
    swcMinify: true,
    // Prevent unwanted optimizations that might cause hydration issues
    compiler: {
      // Disable emotion's source maps in production
      emotion: false,
      // Remove console.logs in production
      removeConsole: process.env.NODE_ENV === 'production',
    },
    // Handle dynamic imports properly
    experimental: {
      // Enable modern JavaScript features
      modernBuild: true,
      // Optimize server components
      serverComponents: true,
    }
  };
  
  export default nextConfig;
  