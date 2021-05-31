import { styled } from "stitches.config";
import { FC } from "react";

export type ArticleDateProps = { date: Date };

export const Time = styled("time", {});

export const ArticleDate: FC<ArticleDateProps> = ({ date }) => (
  <Time dateTime={date.toISOString()}>{date.toString()}</Time>
);
