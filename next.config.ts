import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "digitalassets.tesla.com", 
      "images.slmglobal.vn" // thêm domain cho solar products
    ],
  },
  /* bạn vẫn có thể giữ các config khác nếu cần */
};

export default nextConfig;