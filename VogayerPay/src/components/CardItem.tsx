import Image from "next/image";

type Props = {
  name: string;
  token: string;
};

export function CardItem({ name, token }: Props) {
  return (
    <section className="rounded-2xl">
      <div className="w-full h-auto flex flex-col space-y-2 px-6 pt-10 pb-6 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h3 className="font-bold text-body14 bg-transparent text-white">
          {name}
        </h3>
        <h1 className="font-bold text-title32 bg-transparent text-white">
          `ETH ${token}`
        </h1>
      </div>
      <div className="bg-white pt-6 pb-10 px-6 space-y-4">
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex-none w-6 h-6 relative bg-transparent">
            <Image src="/static/icons/Add.svg" alt="" layout="fill" />
          </div>
          <p className="grow text-[#045299] text-title24 font-bold">
            Claim token
          </p>
        </div>
        <hr className="bg-neutral-200 h-0.5 w-full" />
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex-none w-6 h-6 relative bg-transparent">
            <Image src="/static/icons/Camera.svg" alt="" layout="fill" />
          </div>
          <p className="grow text-neutral-500 text-subtitle20 font-medium">
            Plant Tree
          </p>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex-none w-6 h-6 relative bg-transparent">
            <Image src="/static/icons/Game.svg" alt="" layout="fill" />
          </div>
          <p className="grow text-neutral-500 text-subtitle20 font-medium">
            Play Game
          </p>
        </div>
      </div>
    </section>
  );
}
