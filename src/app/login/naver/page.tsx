"use client";
import useNaverLogin from "@/hooks/useNaverLogin";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const NaverCallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const { data, isLoading, error } = useNaverLogin(code!, state!);

  useEffect(() => {
    if (!isLoading) {
      router.push("/user");
    }
  }, [router, isLoading]);

  return <div>{isLoading ? <div>Loading</div> : <></>}</div>;
};

export default NaverCallbackPage;
