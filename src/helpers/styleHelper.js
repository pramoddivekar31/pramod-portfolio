import { generateMedia } from "styled-media-query";

export const mq = generateMedia({
  mobileMax: "719px",
  tabletMin: "720px",
  desktopMin: "1280px",
  desktopMax: "1680px",
});

export const mediaQuery = {};

//Mobile
mediaQuery.mobile = mq.lessThan("mobileMax");

//Tablet
mediaQuery.tablet = mq.greaterThan("tabletMin");

//Desktop
mediaQuery.desktop = mq.greaterThan("desktopMin");

//Desktop Max
mediaQuery.desktopMax = mq.lessThan("desktopMax");
