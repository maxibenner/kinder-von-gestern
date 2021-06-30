import { useEffect, useState } from "react";

function useWidth() {
  const [innerWidth, setInnerWidth] = useState();
  useEffect(() => {
    setInnerWidth(window.innerWidth);
    const resizeListener = window.addEventListener("resize", () => {
      setInnerWidth(window && window.innerWidth);
    });

    return removeEventListener("resize", resizeListener);
  }, []);
  return innerWidth;
}

export default useWidth;
