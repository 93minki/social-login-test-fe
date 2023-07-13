import KakaoLogin from "@/components/KaKaoLogin";
import LocalSignIn from "@/components/LocalSignIn";
import NaverLogin from "@/components/NaverLogin";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-10 flex flex-col items-center">
      <LocalSignIn />
      <KakaoLogin />
      <NaverLogin />
      <Link href={"/signup"}>회원가입</Link>
    </div>
  );
}
