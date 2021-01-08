import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json.resources.map(({ public_id, version, format }) => ({
      src: `https://res.cloudinary.com/musicandcolour/image/upload/v${version}/${public_id}.${format}`,
      width: 10,
      height: 10
    })));
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return [data, loading];
}
export { useFetch };
