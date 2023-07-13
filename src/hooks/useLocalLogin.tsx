"use client";

import useSWR from "swr";
import axios from "axios";

const useLocalLogin = (email: string, password: string) => {
  const shouldFetch = email.length >= 1 && password.length >= 1;

  const { data, isValidating, error } = useSWR(
    shouldFetch ? "/userLogin" : null,
    async () => {
      const res = await axios.post("/local/login", {
        email,
        password,
      });
      return res.data;
    }
  );
  return { data, isLoading: isValidating, error };
};

export default useLocalLogin;
