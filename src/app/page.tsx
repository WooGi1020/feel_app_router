import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-lvh">
      <Link href="/user" className="px-2 py-1 border rounded-lg hover:bg-slate-100">
        유저 목록
      </Link>
    </main>
  );
}
