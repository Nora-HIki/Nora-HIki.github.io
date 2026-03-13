import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";

export default function(eleventyConfig) {
  // 1. Add the Plugin
  eleventyConfig.addPlugin(lightningCSS);
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
