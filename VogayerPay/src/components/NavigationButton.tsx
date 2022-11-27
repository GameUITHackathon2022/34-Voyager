import Link from "next/link";
import React from "react";
import Image from "next/legacy/image";
import cn from "classnames";

type Props = {
  icon: string;
  activeIcon: string;
  title: string;
  href: string;
  active?: boolean;
};

export default function NavigationButton({
  icon,
  activeIcon,
  title,
  href,
  active = false,
}: Props) {
  return (
    <div>
      <Link href={href} legacyBehavior>
        <a className="w-full h-full bg-white flex flex-col space-y-2 px-2 items-center justify-center">
          <div className={cn("w-6 h-6 relative", { hidden: active })}>
            <Image src={icon} alt="" layout="fill" />
          </div>
          <div className={cn("w-6 h-6 relative", { hidden: !active })}>
            <Image src={activeIcon} alt="" layout="fill" />
          </div>
          <p
            className={cn("text-body14 font-medium", {
              "text-[#045299]": active,
              "text-[#808080]": !active,
            })}>
            {title}
          </p>
        </a>
      </Link>
    </div>
  );
}
