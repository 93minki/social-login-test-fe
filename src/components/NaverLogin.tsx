"use client";

import Image from "next/image";

const NaverLogin = () => {
  const NAVER_REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
  const NAVER_STATE_TOKEN = process.env.NEXT_PUBLIC_NAVER_STATE_TOKEN;
  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const NaverLoginHandler = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_STATE_TOKEN}`;
  };

  return (
    <div>
      <button>
        <Image
          width={200}
          height={50}
          src="/naver_login.png"
          alt="naver_login"
          onClick={NaverLoginHandler}
        />
      </button>
    </div>
  );
};

export default NaverLogin;
