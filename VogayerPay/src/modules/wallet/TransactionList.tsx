import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import cn from "classnames";

const timeline = [
  {
    id: 1,
    content: "Transfer",
    target: "NFT",
    href: "#",
    date: "Sep 20",
    datetime: "2022-01-22",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Receive",
    target: "Token",
    href: "#",
    date: "Sep 22",
    datetime: "2022-04-25",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Donate",
    target: "Token",
    href: "#",
    date: "Sep 28",
    datetime: "2023-09-21",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Receive",
    target: "Token",
    href: "#",
    date: "Sep 30",
    datetime: "2022-10-30",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Donate",
    target: "Token",
    href: "#",
    date: "Oct 4",
    datetime: "2022-11-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

export default function TransactionList() {
  return (
    <div className="flow-root mt-8">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={cn(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}>
                    <event.icon
                      className="h-5 w-5 text-white bg-transparent"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
