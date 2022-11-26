import type { NextSeoProps } from "next-seo";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { baseUrl } from "../../lib/constants";
import ButtonScrollTop from "./ButtonScrollTop";
import Footer from "./Footer";

type ContainerProps = {
  children: ReactNode;
  blank?: boolean;
};
export default function Container({ children, blank = false }: ContainerProps) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title=""
        titleTemplate={`%s`}
        defaultTitle={""}
        description=""
        canonical={""}
        openGraph={{
          url: "",
          type: "website",
          site_name: "",
          description: "",
          title: "",
          images: [
            {
              url: `${baseUrl}/static/icons/ActiveClock.svg`,
              height: 627,
              width: 1200,
              alt: "",
            },
          ],
        }}
      />
      {children}
      {blank ? null : <Footer />}
    </>
  );
}
