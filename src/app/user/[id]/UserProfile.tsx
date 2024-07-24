"use client";

import Image from "next/image";
import { DataType } from "../page";
import { useRouter } from "next/navigation";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/ReactQueryProvider";

interface DataResponse {
  data: DataType;
}

export const deleteUser = async (params: string) => {
  await fetch(`https://669e0cc49a1bda3680052f5d.mockapi.io/router/user/${params}`, {
    method: "DELETE",
  });
};

const UserProfile = ({ data }: DataResponse) => {
  const mutationData = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      router.push("/user");
    },
    onError: () => {
      alert("실패!");
    },
  });
  const router = useRouter();

  const handleDeleteUser = () => {
    try {
      mutationData.mutate(data.id);
    } catch (e) {
      console.error(e);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex items-center justify-center h-lvh flex-col gap-3">
      <div className="flex-col items-center justify-center text-center">
        <div className="relative size-[300px]">
          <Image src={data.avatar} alt="유저 이미지" fill style={{ objectFit: "cover" }} priority />
        </div>
        <p>{data.name}</p>
      </div>
      <button className="px-3 py-1 border rounded-lg" onClick={handleDeleteUser}>
        유저 삭제
      </button>
    </section>
  );
};

export default UserProfile;
