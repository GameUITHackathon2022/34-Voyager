import { useRouter } from "next/router";
import type { FC } from "react";
import { CardItem } from "../../components/CardItem";
import Container from "../../components/layouts/Container";
import Image from "next/image";
import TransactionList from "./TransactionList";

type Props = {};

export const WalletPage: FC<Props> = () => {
  const router = useRouter();
  return (
    <Container>
      <section className="py-10 bg-neutral-50">
        <div className="px-4">
          <CardItem name="Account 1" token="200" />
        </div>

        <div className="mt-4">
          <div className="pt-6 px-6 space-y-4">
            <div className="flex flex-row space-x-2 items-center">
              <p className="grow text-[#045299] text-title24 font-bold">
                Claim token
              </p>
              <div className="w-6 h-6 relative bg-transparent flex-none">
                <Image src="/static/icons/Add.svg" alt="" layout="fill" />
              </div>
            </div>
            <hr className="bg-neutral-200 h-0.5 w-full" />
            <div className="flex flex-row space-x-2 items-center h-12">
              <div className="flex flex-row space-x-2 grow">
                <div className="flex-none w-6 h-6 relative bg-transparent">
                  <Image src="/static/icons/Camera.svg" alt="" layout="fill" />
                </div>
                <p className="grow text-neutral-500 text-subtitle20 font-medium">
                  Plant Tree
                </p>
              </div>
              <button className="text-[#045299] bg-[#DFEFFB] flex items-center justify-center py-2 text-body16 font-bold px-6 rounded-md">
                Claim
              </button>
            </div>
            <div className="flex flex-row space-x-2 items-center h-12">
              <div className="flex-none w-6 h-6 relative bg-transparent">
                <Image src="/static/icons/Game.svg" alt="" layout="fill" />
              </div>
              <p className="grow text-neutral-500 text-subtitle20 font-medium">
                Play Game
              </p>
            </div>
          </div>
          <div className="py-10 px-6">
            <div className="flex flex-row">
              <div className="grow">
                <h3 className="font-bold text-[#045299] text-title24">
                  Transaction
                </h3>
              </div>
              <div className="flex-none w-6 h-6 relative bg-transparent">
                <Image
                  src="/static/icons/Transaction.svg"
                  alt=""
                  layout="fill"
                />
              </div>
            </div>
            <TransactionList />
          </div>
        </div>
      </section>
    </Container>
  );
};
