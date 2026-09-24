/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/", destination: "/neon.html", permanent: false }];
  }
};
