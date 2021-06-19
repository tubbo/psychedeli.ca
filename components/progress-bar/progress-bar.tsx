import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from "stitches.config";
import Icon from "icons/ball-triangle.svg";

export const Spinner = styled(Icon, {
  stroke: "$colors$base0",
  width: "1em",
});

export type LoadingProps = {
  delay: number;
};

export const Loading: FC<LoadingProps> = ({ delay = 500 }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeout;
    const start = () => {
      timeout = setTimeout(() => setLoading(true), delay);
    };
    const end = () => {
      if (timeout) clearTimeout(timeout);
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
  }, [router]);

  if (!loading) return <></>;

  return <Spinner />;
};
