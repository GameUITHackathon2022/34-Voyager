import { CalendarIcon } from "@heroicons/react/20/solid";
import Image from "next/legacy/image";
import { useState } from "react";
import MergeItemSuccessModal from "../../components/MergeItemsSuccessModal";
const mergeItems = [
  {
    id: 1,
    title: "Achieve Level 1",
    closeDate: "2022-12-31",
    closeDateFull: "December 31, 2022",
    receive: true,
    produces: [
      {
        name: "Jar Level 1",
        image: "/static/images/jar-1.png",
        receive: true,
      },
      {
        name: "Fish Level 1",
        image: "/static/images/fish-1.png",
        receive: true,
      },
      {
        name: "Tree Level 1",
        image: "/static/images/tree-1.png",
        receive: true,
      },
      {
        name: "Hat Level 1",
        image: "/static/images/hat-1.png",
        receive: true,
      },
    ],
  },
  {
    id: 2,
    title: "Achieve Level 2",
    closeDate: "2022-12-31",
    closeDateFull: "December 31, 2022",
    receive: true,
    produces: [
      {
        name: "Jar Level 2",
        image: "/static/images/jar-2.png",
        receive: true,
      },
      {
        name: "Fish Level 2",
        image: "/static/images/fish-2.png",
        receive: true,
      },
      {
        name: "Tree Level 2",
        image: "/static/images/tree-2.png",
        receive: true,
      },
      {
        name: "Hat Level 2",
        image: "/static/images/hat-2.png",
        receive: true,
      },
    ],
  },
  {
    id: 3,
    title: "Achieve Level 3",
    closeDate: "2022-12-31",
    closeDateFull: "December 31, 2022",
    receive: true,
    produces: [
      {
        name: "Jar Level 3",
        image: "/static/images/jar-3.png",
        receive: true,
      },
      {
        name: "Fish Level 3",
        image: "/static/images/fish-3.png",
        receive: true,
      },
      {
        name: "Tree Level 3",
        image: "/static/images/tree-3.png",
        receive: true,
      },
      {
        name: "Hat Level 3",
        image: "/static/images/hat-3.png",
        receive: true,
      },
    ],
  },
  {
    id: 4,
    title: "Achieve Level 4",
    closeDate: "2022-12-31",
    closeDateFull: "December 31, 2022",
    receive: false,
    produces: [
      {
        name: "Jar Level 4",
        image: "/static/images/jar-4.png",
        receive: false,
      },
      {
        name: "Fish Level 4",
        image: "/static/images/fish-4.png",
        receive: true,
      },
      {
        name: "Tree Level 4",
        image: "/static/images/tree-4.png",
        receive: true,
      },
      {
        name: "Hat Level 4",
        image: "/static/images/hat-4.png",
        receive: true,
      },
    ],
  },
  {
    id: 5,
    title: "Achieve Level 5",
    closeDate: "2022-12-31",
    closeDateFull: "December 31, 2022",
    receive: false,
    produces: [
      {
        name: "Jar Level 5",
        image: "/static/images/jar-5.png",
        receive: false,
      },
      {
        name: "Fish Level 5",
        image: "/static/images/fish-5.png",
        receive: false,
      },
      {
        name: "Tree Level 5",
        image: "/static/images/tree-5.png",
        receive: false,
      },
      {
        name: "Hat Level 5",
        image: "/static/images/hat-5.png",
        receive: true,
      },
    ],
  },
  {
    id: 6,
    title: "Achieve Level 6",
    closeDate: "2022-12-31",
    closeDateFull: "December 31, 2022",
    receive: true,
    produces: [
      {
        name: "Jar Level 6",
        image: "/static/images/jar-6.png",
        receive: true,
      },
      {
        name: "Fish Level 6",
        image: "/static/images/fish-6.png",
        receive: true,
      },
      {
        name: "Tree Level 1",
        image: "/static/images/tree-6.png",
        receive: true,
      },
      {
        name: "Hat Level 6",
        image: "/static/images/hat-6.png",
        receive: true,
      },
    ],
  },
  {
    id: 7,
    title: "Achieve Level 7",
    closeDate: "2022-12-31",
    closeDateFull: "December 31, 2022",
    receive: false,
    produces: [
      {
        name: "Jar Level 7",
        image: "/static/images/jar-7.png",
        receive: false,
      },
      {
        name: "Fish Level 7",
        image: "/static/images/fish-7.png",
        receive: false,
      },
      {
        name: "Tree Level 7",
        image: "/static/images/tree-7.png",
        receive: false,
      },
      {
        name: "Hat Level 7",
        image: "/static/images/hat-7.png",
        receive: false,
      },
    ],
  },
];

export default function MergeProduceItem() {
  const [type, setType] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="overflow-hidden shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {mergeItems.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <p className="truncate font-bold text-sky-600 text-body16">
                      {position.title}
                    </p>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <p>
                          Closing on{" "}
                          <time dateTime={position.closeDate}>
                            {position.closeDateFull}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                    <div className="flex -space-x-1 overflow-hidden">
                      {position.produces.map((produce, idx) => (
                        <div
                          key={idx}
                          className="h-6 w-6 border-2 border-white rounded-full relative overflow-hidden">
                          <Image
                            src={produce.image}
                            alt={produce.name}
                            layout="fill"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {position.receive ? (
                  <div className="ml-5 flex-shrink-0">
                    <button
                      className="bg-green-200 text-emerald-800 px-4 py-1 rounded-md"
                      onClick={() => {
                        setType(position.id);
                        setIsOpen(true);
                      }}>
                      Receive
                    </button>
                  </div>
                ) : null}
              </div>
            </a>
          </li>
        ))}
      </ul>
      {type !== null ? (
        <MergeItemSuccessModal
          type={type}
          isOpen={isOpen}
          handleClose={closeModal}
        />
      ) : null}
    </div>
  );
}
