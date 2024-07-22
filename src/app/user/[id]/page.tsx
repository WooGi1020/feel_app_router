import { DataType } from "../page";
import UserProfile from "./UserProfile";

export const getUserData = async (params: string): Promise<DataType> => {
  const res = await fetch(`https://669e0cc49a1bda3680052f5d.mockapi.io/todo/user/${params}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const UserPage = async ({ params }: { params: { id: string } }) => {
  const data = await getUserData(params.id);

  return (
    <>
      <UserProfile data={data} />
    </>
  );
};

export default UserPage;
