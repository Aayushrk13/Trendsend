import Image from "next/image";
import { auth } from "@/auth";
export default async function Home() {
  const oauth = await auth();
  return (
    <main>
      <div className="bg-red-500">This is a div</div>
      <div>{oauth?.user?.email}</div>
      <Image
        src={oauth?.user?.image!}
        alt="User photo"
        height={500}
        width={500}
        className="rounded-full overflow-hidden w-25 h-25"
      ></Image>
    </main>
  );
}
