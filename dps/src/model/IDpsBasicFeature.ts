import { ReactElement } from "react";

export interface IDpsHomeFeatureCardData {
  title: string;
  body?: ReactElement;
  bodyText?: string;
  localPath?: string;
  externalLink?: string;
  imgSrc: string;
  linkText?: string;
}