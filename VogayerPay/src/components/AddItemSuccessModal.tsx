import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

type Props = {
  className?: string;
  isOpen?: boolean;
  handleClose: (result: boolean) => void;
};

export default function AddItemSuccessModal(props: Props) {
  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => props.handleClose(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="bg-neutral-700/75 fixed inset-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10">
          <div className="flex h-full w-full items-center justify-center px-4 text-center bg-neutral-700/75">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="shadow-depth4 desktop:p-16 relative flex flex-col items-center justify-center overflow-hidden rounded-2xl  p-8 text-left ">
                <div className="relative mx-auto flex h-28 w-28">
                  <Image
                    src="/static/icons/SendSuccess.svg"
                    layout="fill"
                    alt=""
                  />
                </div>
                <div className="mt-6 text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-title32 text-neutral-80 font-bold">
                    Item added successfully
                  </Dialog.Title>
                  <div className="mt-3">
                    <Link href="/shopping-carts" passHref legacyBehavior>
                      <a className="ext-body16 font-medium text-black inline-block">
                        Go to cart
                      </a>
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
