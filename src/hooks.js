import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchUrl = useCallback(async() => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json.resources.map(({ public_id, version, format }) => ({
      src: `https://res.cloudinary.com/musicandcolour/image/upload/v${version}/${public_id}.${format}`,
      width: 10,
      height: 10
    })));
    setLoading(false);
  }, [url])


  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchUrl]);
  return [data, loading];
}
export { useFetch };
