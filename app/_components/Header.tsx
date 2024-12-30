import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex items-end justify-between">
      <h1 className="text-2xl font-bold">Lista Diária</h1>
      <Image src="/bus.png" alt="Logo" width={100} height={100} />
    </div>
    
  );
}