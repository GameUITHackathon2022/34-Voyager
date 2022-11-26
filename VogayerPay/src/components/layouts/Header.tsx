import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-lg">
          <div className="inset-0 relative w-full aspect-[414/233]">
            <Image src="/static/images/news-banner.png" alt="" layout="fill" />
          </div>
          <div aria-hidden="true" className="relative h-16 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-green-500 bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
            <h1 className="desktop:text-title42 text-title32 mt-8 font-bold text-white bg-transparent text-center">
              Vogayer Daily News
            </h1>
            <p className="text-subtitle18 desktop:max-w-1/2 mt-2 mb-10 font-medium text-white text-center bg-transparent">
              Enviromental Protection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
