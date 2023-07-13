"use client";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import useLocalLogin from "@/hooks/useLocalLogin";
import { useState } from "react";
import { useRouter } from "next/navigation";

type SignUpInputs = {
  email: string;
  password: string;
};

const LocalSignIn = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { data, isLoading, error } = useLocalLogin(userEmail, userPassword);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignUpInputs>();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    setUserEmail(data.email);
    setUserPassword(data.password);

    router.push("/user");
  };

  return (
    <form
      method="POST"
      action="/login/local"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-start border-2 p-2"
    >
      <div>
        Email:
        <input
          type="email"
          {...register("email", { required: true })}
          className="border-2"
        />
      </div>
      <div>
        비밀번호:
        <input
          type="password"
          {...register("password", { required: true })}
          className="border-2"
        />
      </div>

      <input type="submit" className="w-full" value="로그인" />
    </form>
  );
};

export default LocalSignIn;
