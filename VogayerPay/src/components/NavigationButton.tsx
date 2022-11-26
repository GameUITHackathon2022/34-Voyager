import Link from "next/link";
import React from "react";
import Image from "next/image";
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
          <Image
            src={icon}
            alt=""
            className={cn({ hidden: active })}
            width={24}
            height={24}
          />

          <Image
            src={activeIcon}
            alt=""
            className={cn({ hidden: !active })}
            width={24}
            height={24}
          />
          <p className="text-body14 text-neutral-300 font-medium">{title}</p>
        </a>
      </Link>
    </div>
  );
}
