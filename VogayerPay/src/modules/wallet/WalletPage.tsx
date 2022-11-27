import Image from "next/legacy/image";
import { ChangeEvent, FC, useState } from "react";
import { Transactions } from "../../api/transactions/types";
import { Balance } from "../../api/wallet/types";
import { CardItem } from "../../components/CardItem";
import DetectTreeSuccessModal from "../../components/DetectTreeSuccessModal";
import Container from "../../components/layouts/Container";
import LoadingModal from "../../components/LoadingModal";
import TransactionList from "./TransactionList";

type Props = {
  resBalance: Balance;
  resTransactions: Transactions;
};

export const WalletPage: FC<Props> = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOpen1, setIsOpen1] = useState(false);

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  function openModal1() {
    setIsOpen1(true);
  }

  const [isOpen2, setIsOpen2] = useState(false);

  const closeModal2 = () => {
    setIsOpen2(false);
  };

  function openModal2() {
    setIsOpen2(true);
  }
  const changeUploadFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files?.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
    setIsOpen1(true);
  };

  const handleOpen = () => {
    const timer = setTimeout(() => {
      setIsOpen2(true);
    }, 2000);
    () => clearTimeout(timer);
    setIsOpen1(true);
    const timer1 = setTimeout(() => {
      setIsOpen1(false);
    }, 2000);
    () => clearTimeout(timer1);
  };

  const onSubmitFileHandler = (file: File) => {
    const payload = {
      file: file,
    };

    // if (payload) {
    //   submitFile(payload);
    // }
  };

  // const submitFile = (payload: FormUploadCVBody) => {
  //   putFormUploadCVMutation.mutate(payload, {
  //     onSuccess: (res) => {
  //       setValue("cv_url", res.url, {
  //         shouldValidate: false,
  //       });
  //     },
  //     onError: (err) => {
  //       toast.error(
  //         err.response?.data.url || "Có lỗi xảy ra, vui lòng thử lại sau."
  //       );
  //     },
  //   });
  // };

  return (
    <Container title="Wallet">
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

              <button
                className="sapce-x-2 relative flex flex-row items-center justify-center space-x-4 overflow-hidden bg-[#DFEFFB] px-4 py-2 w-20"
                aria-label="button">
                <div className="relative h-4 w-4 bg-transparent">
                  <Image
                    src="/static/icons/UploadFile.svg"
                    alt=""
                    layout="fill"
                  />
                </div>
                <input
                  accept=".png,.jpg"
                  onChange={() => handleOpen()}
                  type="file"
                  className="absolute left-0 top-0 mt-2 scale-150 cursor-pointer opacity-0"
                />
              </button>
            </div>
            <div className="flex flex-row space-x-2 items-center h-12">
              <div className="flex flex-row space-x-2 grow">
                <div className="flex-none w-6 h-6 relative bg-transparent">
                  <Image src="/static/icons/Game.svg" alt="" layout="fill" />
                </div>
                <p className="grow text-neutral-500 text-subtitle20 font-medium">
                  Play Game
                </p>
              </div>
              <button className="text-[#045299] bg-[#DFEFFB] flex items-center justify-center py-2 text-body16 font-bold px-6 rounded-md">
                Play
              </button>
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
            <hr className="bg-neutral-200 h-0.5 w-full my-4" />
            <TransactionList />
          </div>
        </div>
        <LoadingModal isOpen={isOpen1} handleClose={closeModal1} />
        <DetectTreeSuccessModal isOpen={isOpen2} handleClose={closeModal2} />
      </section>
    </Container>
  );
};
