import React from "react";
export function Footer({}) {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const currentDate = ` ${day}.${month}.${year}`;
  return <footer className="pb-4 flex text-xl font-bold">{currentDate}</footer>;
}
