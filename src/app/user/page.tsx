import Input from "./(component)/Input";
import UserList from "./(component)/UserList";

export interface DataType {
  createdAt?: Date;
  name: string;
  avatar: string;
  id: string;
}

export const getData = async () => {
  const res = await fetch(`https://669e0cc49a1bda3680052f5d.mockapi.io/router/user`, {
    cache: "no-store",
  });
  const data: Promise<DataType[]> = res.json();
  if (!res.ok) {
    throw new Error();
  }

  return data;
};

// export const metadata = {
//   title: "유저 목록",
// };

const Page = async () => {
  return (
    <section className="flex items-center justify-center h-lvh flex-col gap-10">
      <UserList />
      <Input />
    </section>
  );
};

export default Page;
