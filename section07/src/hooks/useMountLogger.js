import { useEffect, useRef } from "react";

export const useMountLogger = () => {
  const isMount = useRef(false);
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
};
