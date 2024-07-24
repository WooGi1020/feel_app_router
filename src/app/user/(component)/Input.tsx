"use client";
import React, { ChangeEvent, useState } from "react";
import { DataType } from "../page";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/ReactQueryProvider";

export const postData = async (formData: DataType) => {
  const res = await fetch(`https://669e0cc49a1bda3680052f5d.mockapi.io/router/user`, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
};

const Input = () => {
  const mutationData = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
        exact: true,
      });
    },
    onError: () => {
      alert("실패!");
    },
  });

  const handleClick = async () => {
    try {
      mutationData.mutate({ id: "1", name: "1", avatar: "1" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <button className="w-full border hover:bg-gray-100" onClick={handleClick}>
        확인
      </button>
    </div>
  );
};

export default Input;
