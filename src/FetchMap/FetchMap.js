import React, { useEffect } from "react";

export default async function FetchMap() {
  let layer = "temp_new";
  let x = 0;
  let y = 0;
  let z = 0;
  let api_key = "b082187379f78351978af40bf44bc277";
  const mapUrl = await fetch(
    `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${api_key}`
  );
  const tempMapUrl = await mapUrl.url;
  console.log(tempMapUrl);
  return tempMapUrl.toString();
}
