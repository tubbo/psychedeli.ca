import { useRouter } from "next/router";

export function useCurrentURL(): string {
  if (!process.env.NEXT_PUBLIC_HOST)
    throw new Error(`$NEXT_PUBLIC_HOST not set`);

  const router = useRouter();
  const url = new URL(process.env.NEXT_PUBLIC_HOST);

  url.pathname = router.asPath;

  return url.toString();
}
