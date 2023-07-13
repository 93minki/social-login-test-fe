"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type SignUpInputs = {
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
};

const LocalSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignUpInputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    const res = await axios.post("/local/signup", {
      email: data.email,
      password: data.password,
      name: data.name,
    });
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-start border-2 p-2"
    >
      <div>
        이름:
        <input
          type="text"
          {...register("name", { required: true })}
          className="border-2"
        />
      </div>
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
      <div>
        비밀번호 확인:
        <input
          type="password"
          {...register("passwordConfirm", {
            required: true,
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Password Not Match!";
              }
            },
          })}
          className="border-2"
        />
      </div>
      {errors.passwordConfirm && <span>비밀번호가 일치하지 않습니다.</span>}
      <input type="submit" className="w-full" value="회원가입" />
    </form>
  );
};

export default LocalSignUp;
