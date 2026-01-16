module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("assets/");

  // Add a filter to handle markdown in JSON (for bio fields etc)
  eleventyConfig.addFilter("safe", function(content) {
    return content;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
