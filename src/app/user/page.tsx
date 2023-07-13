"use client";
import useSWR from "swr";
import Image from "next/image";

const UserPage = () => {
  const { data, isValidating, error } = useSWR("/userLogin");

  console.log("socialLogin user data", data);

  return (
    <div>
      <div>
        <Image
          src={data.user.profile_image}
          alt="profile"
          width={100}
          height={100}
        />
        {data.user.name}님 안녕하세요
      </div>
      <div>Email: {data.user.email}</div>
      <div>id: {data.user.id}</div>
    </div>
  );
};

export default UserPage;
