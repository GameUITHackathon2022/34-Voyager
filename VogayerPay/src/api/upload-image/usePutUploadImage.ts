import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";

export interface UploadImageBody {
  file: File;
}

export type UploadImageResponse = {
  res: boolean;
};

export const putUploadImageFn = async (body: UploadImageBody) => {
  const { file } = body;

  const formData = new FormData();

  formData.append("file", file);

  const response = await httpClient.put<UploadImageResponse>(
    apiRoutes.uploadImage,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "*/*",
      },
    }
  );
  return response.data;
};

export const usePutUploadImageMutation = (
  opts?: UseMutationOptions<
    UploadImageResponse,
    AxiosError<UploadImageResponse>,
    UploadImageBody
  >
) =>
  useMutation<
    UploadImageResponse,
    AxiosError<UploadImageResponse>,
    UploadImageBody
  >(putUploadImageFn, opts);
