import Image from "next/legacy/image";

type Props = {
  title?: string;
};

export default function NavigationBack({ title }: Props) {
  return;
  {
    title ? (
      <div className="flex flex-row space-x-4 w-full h-16">
        <div className="relative w-6 h-6 flex-none">
          <Image src="/static/icons/ArrowNarrowLeft.svg" alt="" layout="fill" />
        </div>
        <h2 className="text-subtitle18 font-weight text-black">{title}</h2>
      </div>
    ) : null;
  }
}
