import cn from "classnames";

import { StarIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Fish Level 4",
    price: "$149",
    rating: 5,
    buyCount: 38,
    imageSrc: "/static/images/fish-3.png",
    imageAlt: "",
    href: "/store/fish-level-4",
  },
  {
    id: 2,
    name: "Hat Level 1",
    price: "$15",
    rating: 5,
    buyCount: 18,
    imageSrc: "/static/images/hat-1.png",
    imageAlt: "",
    href: "/store/hat-level-1",
  },
  {
    id: 3,
    name: "Jar Level 2",
    price: "$15",
    rating: 5,
    buyCount: 14,
    imageSrc: "/static/images/jar-2.png",
    imageAlt: "",
    href: "/store/jar-level-2",
  },
  {
    id: 4,
    name: "Jar Level 1",
    price: "$10",
    rating: 4,
    buyCount: 21,
    imageSrc: "/static/images/jar-1.png",
    imageAlt: "",
    href: "/store/jar-level-1",
  },
  {
    id: 5,
    name: "Fish Level 4",
    price: "$149",
    rating: 5,
    buyCount: 38,
    imageSrc: "/static/images/fish-3.png",
    imageAlt: "",
    href: "/store/fish-level-4",
  },
  {
    id: 6,
    name: "Tree Level 3",
    price: "$150",
    rating: 5,
    buyCount: 18,
    imageSrc: "/static/images/tree-3.png",
    imageAlt: "",
    href: "/store/tree-level-3",
  },
  {
    id: 7,
    name: "Tree Level 1",
    price: "$15",
    rating: 5,
    buyCount: 14,
    imageSrc: "/static/images/tree-1.png",
    imageAlt: "",
    href: "/store/tree-level-1",
  },
  {
    id: 8,
    name: "Fish Level 2",
    price: "$30",
    rating: 4,
    buyCount: 21,
    imageSrc: "/static/images/fish-2.png",
    imageAlt: "",
    href: "/store/fish-level-2",
  },
];

export default function MainStore() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <div className="w-full h-full relative">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                  />
                </div>
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={product.href} legacyBehavior passHref>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </Link>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={cn(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.buyCount} times
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
