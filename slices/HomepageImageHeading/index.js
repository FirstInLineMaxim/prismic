import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.HomepageImageHeadingSlice} HomepageImageHeadingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomepageImageHeadingSlice>} HomepageImageHeadingProps
 * @param { HomepageImageHeadingProps }
 */
const HomepageImageHeading = ({ slice }) => {
  return (
    <div className="grid grid-cols-2 gap-28 w-full h-1/2 ">
      <div className="block relative w-full h-full">
        <Image
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col justify-between ">
        <span className={"text-6xl"}>
          <PrismicRichText field={slice.primary.title} />
        </span>
        <span className="text-xl bold">
          <PrismicRichText field={slice.primary.description} />
        </span>
        <button className="px-14 py-3 bg-blue-600 w-fit rounded-lg text-white">
          Button
        </button>
      </div>
    </div>
  );
};

export default HomepageImageHeading;
