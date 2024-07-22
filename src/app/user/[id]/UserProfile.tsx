"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { DataType } from "../page";

import React from "react";

interface DataResponse {
  data: DataType;
}

const UserProfile = ({ data }: DataResponse) => {
  const [user, setUser] = useState<DataType | undefined>(undefined);

  useEffect(() => {
    setUser(data);
  }, [data]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex items-center justify-center h-lvh flex-col">
      <div className="relative size-[300px]">
        <Image src={user.avatar} alt="유저 이미지" fill style={{ objectFit: "cover" }} priority />
      </div>
      <p>{user.name}</p>;
    </section>
  );
};

export default UserProfile;
