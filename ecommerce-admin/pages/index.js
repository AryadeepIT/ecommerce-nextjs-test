import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  console.log(session);
  return <Layout>    

    <div className="text-teal-900 flex justify-between">
      <h2>
      Hello, <b>{session?.user?.name}</b>
      </h2>

      <div className="flex bg-btnBackground gap-1 text-dashColor font-semibold rounded-lg overflow-hidden">
      <img src={session?.user?.image} alt="user-img" className="w-6 h-6"/> 
      <span className="px-2">
      {session?.user?.name}
      </span>

      </div>

    </div>
      
    </Layout>

}