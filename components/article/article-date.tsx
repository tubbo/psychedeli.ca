import { styled } from "stitches.config";
import { FC } from "react";
import { DateTime } from "luxon";

export type ArticleDateProps = { date: string };

export const Time = styled("time", { fontWeight: 500 });

export const ArticleDate: FC<ArticleDateProps> = ({ date: timestamp }) => {
  const date = DateTime.fromISO(timestamp);

  return <Time dateTime={timestamp}>{date.toLocaleString()}</Time>;
};
