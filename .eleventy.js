module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("assets/");

  // Custom date filter for blog posts
  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (!dateObj) return "";
    const date = new Date(dateObj);
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Support common format: "%B %d, %Y" -> "January 15, 2026"
    if (format === "%B %d, %Y") {
      return `${month} ${day}, ${year}`;
    }
    // Default format
    return `${month} ${day}, ${year}`;
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
