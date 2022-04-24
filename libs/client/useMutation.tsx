import { useState } from "react";

type useMutationState = {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
};

type UseMutationResult = [(data: any) => void, useMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data: any) {
    setLoading(true);

    fetch("/api/users/enter", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json().catch(() => {}))
      .then((json) => setData(json))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }

  return [mutation, { loading, data, error }];
}
