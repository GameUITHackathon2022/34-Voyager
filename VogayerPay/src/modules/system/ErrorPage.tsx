import Head from "next/head";
import type { FC } from "react";

type Props = {
  statusCode?: number | null;
  error?: Error;
  message?: string;
  errorId?: string;
  children?: never;
};

export const ErrorPage: FC<Props> = (props) => {
  const { error, errorId, message, statusCode } = props;

  return (
    <>
      <Head>
        <title>Error {statusCode}</title>
      </Head>
      <main className="mt-header-mobile max-w-8xl desktop:mt-header-desktop desktop:px-8 min-h-content mx-auto flex w-full grow flex-col px-4">
        <div className="my-auto shrink-0 py-16 sm:py-32">
          <p className="text-blue-50 text-base font-semibold">
            {statusCode}
          </p>
          <h1
            data-testid="error-title"
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight">
            Woops!
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Something went wrong. Please try again later
          </p>
          <div className="mt-6 text-base text-gray-500">
            <p data-testid="error-status-code">
              Code: <code>{statusCode}</code>
            </p>
            <p>
              Message: <code>{message}</code>
            </p>
            <p>
              Error id: <code>{errorId}</code>
            </p>
            <p>
              ErrorMessage: <code>{error?.message}</code>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
