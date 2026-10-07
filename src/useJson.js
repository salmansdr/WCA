import { useEffect, useState } from "react";

export default function useJson(url) {
  const [state, setState] = useState({ data: [], loading: true, error: null });
  useEffect(() => {
    let active = true;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load ${url}`);
        return r.json();
      })
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch((error) => active && setState({ data: [], loading: false, error }));
    return () => {
      active = false;
    };
  }, [url]);
  return state;
}
