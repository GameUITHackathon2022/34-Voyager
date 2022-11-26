import { useRouter } from "next/router";
import type { FC } from "react";
import { CardItem } from "../../components/CardItem";
import Container from "../../components/layouts/Container";

type Props = {};

export const WalletPage: FC<Props> = () => {
  const router = useRouter();
  return (
    <Container>
      <section className="px-4 py-10">
        <CardItem name="Account 1" token="ETH 200" />
        <div className="mt-4"></div>
      </section>
    </Container>
  );
};
