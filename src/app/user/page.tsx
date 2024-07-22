import Link from "next/link";

export interface DataType {
  createdAt: Date;
  name: string;
  avatar: string;
  id: string;
}

export const getData = async (params: string) => {
  const res = await fetch(`https://669e0cc49a1bda3680052f5d.mockapi.io/todo/${params}`);
  const data: Promise<DataType[]> = res.json();
  return data;
};

export const metadata = {
  title: "유저 목록",
};

const page = async () => {
  const dataList = await getData("user");
  return (
    <section className="flex items-center justify-center h-lvh">
      <ul className="flex gap-5">
        {dataList.map((data) => {
          return (
            <li key={data.id} className="px-2 py-1 border rounded-lg hover:bg-slate-100">
              <Link href={`/user/${data.id}`}>유저 {data.id}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default page;
