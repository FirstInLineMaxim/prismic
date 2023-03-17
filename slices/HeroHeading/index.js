import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroHeadingSlice} HeroHeadingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroHeadingSlice>} HeroHeadingProps
 * @param { HeroHeadingProps }
 */
const HeroHeading = ({ slice }) => (
  // <section>
  //   <span className="title">
  //     {
  //       slice.primary.title ?
  //       <PrismicRichText field={slice.primary.title}/>
  //       : <h2>Template slice, update me!</h2>
  //     }
  //   </span>
  //   {
  //     slice.primary.description ?
  //     <PrismicRichText field={slice.primary.description}/>
  //     : <p>start by editing this slice from inside Slice Machine!</p>
  //   }
  //   <style jsx>{`
  //       section {
  //         max-width: 600px;
  //         margin: 4em auto;
  //         text-align: center;
  //       }
  //       .title {
  //         color: #8592e0;
  //       }
  //   `}</style>
  // </section>
  <div className="w-full h-1/2">
    <div className="w-1/2 h-full pr-14">
      <div
        className={"text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl"}
      >
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="mt-5  text-xs sm:text-base md:text-md lg:text-lg xl:text-xl bold">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </div>
  </div>
);

export default HeroHeading;
