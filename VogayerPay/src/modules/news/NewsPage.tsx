import { useRouter } from "next/router";
import type { FC } from "react";
import Container from "../../components/layouts/Container";

type Props = {};

export const NewsPage: FC<Props> = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="px-4 mx-auto"></div>
    </Container>
  );
};
