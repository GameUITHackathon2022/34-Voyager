import cn from "classnames";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

type News = {
  slug: string;
  title: string;
  summary: string;
  srcImg: string;
  altImg: string;
};

type Props = {
  news: News;
  className?: string;
  column?: boolean;
};

export default function NewsItem({ news, className, column = true }: Props) {
  const { locale } = useRouter();
  return (
    <div
      className={cn("group flex flex-col items-start", className, {
        "desktop:flex-row": !column,
      })}>
      <Link
        href={{
          pathname: "/news/[slug]",
          query: { slug: news.slug },
        }}
        as={"/news/" + news.slug}
        passHref
        locale={locale}
        title={news.title}
        className={cn("flex-none", {
          "w-full": column,
          "desktop:w-1/2 w-full": !column,
        })}>

        <div className="relative aspect-[17/10] w-full overflow-hidden rounded-lg">
          <Image
            src={news.srcImg}
            alt={news.altImg}
            layout="fill"
            className="transition duration-200 ease-out group-hover:scale-105"
            priority
          />
        </div>

      </Link>
      <div className="grow">
        <Link
          href={{
            pathname: "/news/[slug]",
            query: { slug: news.slug },
          }}
          as={"/news/" + news.slug}
          passHref
          locale={locale}
          title={news.title}
          className="block">

          <div
            className={cn("flex, flex-start", {
              "pt-6": column,
              "desktop:pl-6 pt-6": !column,
            })}>
            <h3 className="text-neutral-90 group-hover:text-primary-50 desktop:mt-2 line-clamp-3 mt-1 text-left font-semibold desktop:text-subtitle18 text-body16">
              {news.title}
            </h3>
            <div className="text-body14 text-neutral-70 line-clamp-2 text-left font-normal">
              {news.summary}
            </div>
          </div>

        </Link>
      </div>
    </div>
  );
}
