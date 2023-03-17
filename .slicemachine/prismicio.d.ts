// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for footer documents */
type FooterDocumentData = Record<string, never>;
/**
 * footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<FooterDocumentData>, "footer", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HomepageImageHeadingSlice | HeroHeadingSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
export type AllDocumentTypes = FooterDocument | HomepageDocument;
/**
 * Primary content in Footer → Primary
 *
 */
interface FooterSliceDefaultPrimary {
    /**
     * Title field in *Footer → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: footer.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Footer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: footer.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * date field in *Footer → Primary*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.primary.date
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
}
/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Footer*
 *
 */
type FooterSliceVariation = FooterSliceDefault;
/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSlice = prismicT.SharedSlice<"footer", FooterSliceVariation>;
/**
 * Primary content in HeroHeading → Primary
 *
 */
interface HeroHeadingSliceDefaultPrimary {
    /**
     * Title field in *HeroHeading → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_heading.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroHeading → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_heading.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for HeroHeading Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroHeading`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroHeadingSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroHeadingSliceDefaultPrimary>, never>;
/**
 * Slice variation for *HeroHeading*
 *
 */
type HeroHeadingSliceVariation = HeroHeadingSliceDefault;
/**
 * HeroHeading Shared Slice
 *
 * - **API ID**: `hero_heading`
 * - **Description**: `HeroHeading`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroHeadingSlice = prismicT.SharedSlice<"hero_heading", HeroHeadingSliceVariation>;
/**
 * Primary content in HomepageImageHeading → Primary
 *
 */
interface HomepageImageHeadingSliceDefaultPrimary {
    /**
     * Title field in *HomepageImageHeading → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: So i write here my heading ?
     * - **API ID Path**: homepage_image_heading.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HomepageImageHeading → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: homepage_image_heading.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *HomepageImageHeading → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage_image_heading.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for HomepageImageHeading Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HomepageImageHeading`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomepageImageHeadingSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HomepageImageHeadingSliceDefaultPrimary>, never>;
/**
 * Slice variation for *HomepageImageHeading*
 *
 */
type HomepageImageHeadingSliceVariation = HomepageImageHeadingSliceDefault;
/**
 * HomepageImageHeading Shared Slice
 *
 * - **API ID**: `homepage_image_heading`
 * - **Description**: `HomepageImageHeading`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomepageImageHeadingSlice = prismicT.SharedSlice<"homepage_image_heading", HomepageImageHeadingSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { FooterDocumentData, FooterDocument, HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, AllDocumentTypes, FooterSliceDefaultPrimary, FooterSliceDefault, FooterSliceVariation, FooterSlice, HeroHeadingSliceDefaultPrimary, HeroHeadingSliceDefault, HeroHeadingSliceVariation, HeroHeadingSlice, HomepageImageHeadingSliceDefaultPrimary, HomepageImageHeadingSliceDefault, HomepageImageHeadingSliceVariation, HomepageImageHeadingSlice };
    }
}
