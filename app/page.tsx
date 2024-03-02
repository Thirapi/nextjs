import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-center pt-3">
    <h1 className="text-8xl font-black text-center">✋under construction✋</h1>
    <Link href="/posts" className="text-8xl font-black pt-4 hover:line-through">Posts</Link>
    </div>
    </>
    
  );
}
