"use client";
import useKakaoLogin from "@/hooks/useKakaoLogin";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const KakaoCallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  const { data, isLoading, error } = useKakaoLogin(code!);

  useEffect(() => {
    if (!isLoading) router.push("/user");
  }, [router, isLoading]);

  return <div>{isLoading ? <div>Loading...</div> : <div>Hello</div>}</div>;
};

export default KakaoCallbackPage;
