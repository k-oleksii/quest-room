import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-4 items-center  p-24">
      <span className="font-bold text-3xl text-silver">Quest Room</span>
      <Image
        src="/logo.svg"
        alt="Quest Room"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
