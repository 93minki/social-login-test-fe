"use client";

import useSWR from "swr";
import axios from "axios";

const useKakaoLogin = (code: string) => {
  const { data, isValidating, error } = useSWR("/userLogin", async () => {
    const res = await axios.post("/social/kakao", {
      code,
    });
    return res.data;
  });
  return { data, isLoading: isValidating, error };
};

export default useKakaoLogin;
