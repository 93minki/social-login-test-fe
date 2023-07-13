"use client";

import useSWR from "swr";
import axios from "axios";

const useNaverLogin = (code: string, state: string) => {
  const { data, isValidating, error } = useSWR("/userLogin", async () => {
    const res = await axios.post("/social/naver", {
      code,
      state,
    });
    return res.data;
  });
  return { data, isLoading: isValidating, error };
};

export default useNaverLogin;
