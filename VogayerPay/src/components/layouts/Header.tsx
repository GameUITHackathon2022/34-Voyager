import Image from "next/image";

type Props = {
  title?: string;
};

export default function Header({ title }: Props) {
  return;
  {
    title ? (
      <header className="flex flex-row space-x-4 w-full h-16">
        <div className="relative w-6 h-6 flex-none">
          <Image src="/static/icons/ArrowNarrowLeft.svg" alt="" layout="fill" />
        </div>
        <h2 className="text-subtitle18 font-weight text-black">{title}</h2>
      </header>
    ) : null;
  }
}
