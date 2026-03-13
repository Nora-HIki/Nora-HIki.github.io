module.exports = function(eleventyConfig) {
  // direct copy
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");

//Actual config
return {
  dir: {
    input: "src", // source files location
    output: "_site", // build location
    includes: "_includes", // includes location
    layouts: "_layouts"  // layouts location
  }
};
};


