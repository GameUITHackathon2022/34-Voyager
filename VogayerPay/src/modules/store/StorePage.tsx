import { Tab } from "@headlessui/react";
import cn from "classnames";
import { useRouter } from "next/router";
import type { FC } from "react";
import Container from "../../components/layouts/Container";
import MainStore from "./MainStore";
import MergeProduceItem from "./MergeProduceItem";

type Props = {};

const tabs = [
  { id: 1, name: "My Store" },
  { id: 2, name: "Merge Items" },
];

export const StorePage: FC<Props> = () => {
  const router = useRouter();
  return (
    <Container>
      <section className="py-10 bg-white">
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 p-1">
              {tabs.map((tab, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    cn(
                      "w-full py-2.5 text-subtitle18 font-bold leading-5 text-[#045299] border-b-2 focus-visible:outline-none",
                      selected ? "border-[#045299]" : "border-neutral-300"
                    )
                  }>
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel>
                <MainStore />
              </Tab.Panel>
              <Tab.Panel>
                <MergeProduceItem />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </Container>
  );
};
