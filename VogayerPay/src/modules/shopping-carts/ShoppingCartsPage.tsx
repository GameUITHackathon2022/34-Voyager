import Image from "next/image";
import Container from "../../components/layouts/Container";
import Link from "next/link";
import BuySuccessModal from "../../components/BuySuccessModal";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Tree Level 3",
    href: "#",
    price: "$150",
    color: "Mint",
    size: "Medium",
    inStock: true,
    imageSrc: "/static/images/tree-3.png",
    imageAlt: "",
  },
  {
    id: 2,
    name: "Jar Level 2",
    href: "#",
    price: "$15",
    color: "Charcoal",
    inStock: false,
    leadTime: "7-8 years",
    size: "Large",
    imageSrc: "/static/images/fish-2.png",
    imageAlt: "",
  },
  // More products...
];

export default function ShoppingCartsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Container title="Shopping Carts">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {products.map((product, idx) => (
                  <li key={product.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <div className="h-24 w-24 relative rounded-md">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          layout="fill"
                        />
                      </div>
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </a>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            {product.price}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.size}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <select
                          id={`quantity-${idx}`}
                          name={`quantity-${idx}`}
                          className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm w-20">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>
                        <div className="ml-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-sky-600 hovertext-sky-700">
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      $165.00
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-sky-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  onClick={() => setIsOpen(true)}>
                  Checkout
                </button>
              </div>

              <div className="mt-6 text-center text-sm space-y-2">
                <p>or</p>
                <div>
                  <Link href="/store" legacyBehavior passHref>
                    <a className="font-medium text-sky-600">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </form>
        </div>
        <BuySuccessModal isOpen={isOpen} handleClose={closeModal} />
      </div>
    </Container>
  );
}
