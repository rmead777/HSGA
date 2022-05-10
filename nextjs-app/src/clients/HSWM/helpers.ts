import axios from "axios";
import { map } from "lodash";
import { RequiredFormData, ApiResult } from "./types";

function parseFormData(
  data: Record<string, string>[]
): Record<string, string | undefined> {
  const _csrfToken = data.find((obj) => obj.name === "_csrfToken")?.value;
  const _Token_fields = data.find(
    (obj) => obj.name === "_Token[fields]"
  )?.value;
  const _Token_debug = data.find((obj) => obj.name === "_Token[debug]")?.value;

  return {
    _csrfToken,
    "_Token[fields]": _Token_fields,
    "_Token[debug]": _Token_debug,
  };
}

export function handleSuccess<T>(response: {
  data: unknown | { error: string };
}): ApiResult<T> {
  const { data } = response;

  // @ts-expect-error data is unknown
  if (data?.error) {
    // @ts-expect-error data is unknown
    const error = data?.error;

    if (typeof error === "string") {
      return {
        // @ts-expect-error data is unknown
        errors: [data?.error],
      };
    } else {
      const errors = map(error, (value, key) => {
        const reason =
          typeof value === "string" ? value : Object.values(value)[0];

        return `${key}: ${reason}`;
      });

      return {
        errors,
      };
    }
  }

  return {
    data: data as T,
  };
}

export async function myGet<T>(url: string) {
  return axios.get<T>(url).then((data) => handleSuccess<T>(data));
}

async function fetchFormData(url: string) {
  const { data, errors } = await myGet<RequiredFormData>(url);

  if (data) {
    return {
      data: parseFormData(data),
    };
  } else {
    return {
      errors,
    };
  }
}

export async function complexFormSubmit<T>(
  values: Record<string, string>,
  getFormDataUrl: string,
  postFormDataUrl: string
) {
  const { data: formData, errors } = await fetchFormData(getFormDataUrl);

  if (errors) {
    return { errors };
  }

  const data = {
    ...values,
    ...formData,
  };

  return await axios
    .post(postFormDataUrl, {
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((data) => handleSuccess<T>(data));
}
