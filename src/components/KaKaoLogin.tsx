"use client";

import Image from "next/image";

export default function KakaoLogin() {
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;
  };

  return (
    <div className="text-center mt-10">
      <button type="button">
        <Image
          width="200"
          height="50"
          src="/kakao_login_medium_narrow.png"
          alt="login button"
          onClick={handleLogin}
        />
      </button>
    </div>
  );
}
