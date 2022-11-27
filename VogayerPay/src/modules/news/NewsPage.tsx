import type { FC } from "react";
import Container from "../../components/layouts/Container";
import Header from "../../components/layouts/Header";
import { newsData } from "./newsData";
import NewsItem from "./NewsItem";

type Props = {};

export const NewsPage: FC<Props> = () => {
  return (
    <Container title="News">
      <Header />
      <div className="px-4 mx-auto pt-8 flex flex-col space-y-6">
        {newsData.map((item) => (
          <NewsItem
            key={item.id}
            news={{
              slug: item.slug,
              title: item.title,
              summary: item.summary,
              srcImg: item.srcImg,
              altImg: item.altImg,
            }}
          />
        ))}
      </div>
    </Container>
  );
};
