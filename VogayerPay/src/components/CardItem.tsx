import Image from "next/image";
import cn from "classnames";

type Props = {
  name: string;
  token: string;
  className?: string;
};

export function CardItem({ name, token, className }: Props) {
  return (
    <div
      className={cn(
        "w-full h-auto flex flex-col space-y-2 py-10 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl border border-neutral-100 shadow-dropshadow-form",
        className
      )}>
      <h3 className="font-bold text-body14 bg-transparent text-white">
        {name}
      </h3>
      <h1 className="font-bold text-title32 bg-transparent text-white">
        ETH {token}
      </h1>
    </div>
  );
}
