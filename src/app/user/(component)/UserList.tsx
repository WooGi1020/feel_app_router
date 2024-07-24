"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../page";
import Link from "next/link";

const UserList = () => {
  const {
    data: dataList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <ul className="flex gap-5">
      {dataList?.map((data) => {
        return (
          <li key={data.id} className="px-2 py-1 border rounded-lg hover:bg-slate-100">
            <Link href={`/user/${data.id}`}>유저 {data.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
