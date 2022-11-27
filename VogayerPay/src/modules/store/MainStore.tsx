import { StarIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import AddItemSuccessModal from "../../components/AddItemSuccessModal";

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
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="shadow-shadow8 rounded-2xl flex flex-row bg-[#FFF2EA]">
              <div className="relative aspect-square h-full z-10 flex-none rounded-3xl mr-4">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  layout="fill"
                />
              </div>
              <div className="grow py-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>

                <div className="flex items-center grow my-3">
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
                <p className="relative text-lg font-semibold text-gray-800 bg-transparent z-20">
                  {product.price}
                </p>
              </div>
              <div className="mt-6 px-4 pb-4 flex-none flex items-center">
                <button
                  className="relative flex items-center justify-center rounded-md border border-gray-400 bg-[#DFEFFB] py-2 px-4 text-body16 text-gray-900 hover:bg-lime-200 font-bold "
                  onClick={() => setIsOpen(true)}>
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddItemSuccessModal isOpen={isOpen} handleClose={closeModal} />
    </div>
  );
}
