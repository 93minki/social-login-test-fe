/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["k.kakaocdn.net", "ssl.pstatic.net"],
  },
  async rewrites() {
    return [
      {
        source: "/social/kakao",
        destination: "http://localhost:3030/login/kakao",
      },
      {
        source: "/social/naver",
        destination: "http://localhost:3030/login/naver",
      },
      {
        source: "/local/signup",
        destination: "http://localhost:3030/signup",
      },
      {
        source: "/local/login",
        destination: "http://localhost:3030/login/local",
      },
    ];
  },
};

module.exports = nextConfig;
