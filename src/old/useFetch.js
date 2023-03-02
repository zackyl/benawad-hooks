import React, { useEffect, useState, useRef } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isCurrent = useRef(true);
  useEffect(() => {
    return () => (isCurrent.current = false);
  }, []);

  useEffect(() => {
    setLoading(true);
    isCurrent.current = true;
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        // setTimeout(() => {}, 2000);
        if (isCurrent.current) {
          setData(y);
          setLoading(false);
        }
      });
  }, [url]);
  return { data, loading };
}

export default useFetch;
