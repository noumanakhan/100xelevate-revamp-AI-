/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://100xelevate.com",
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/*?trk=", "/*?password-protected=", "/*redirect_to=", "/?s="] },
    ],
  },
  // Priority overrides per path prefix
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/services/")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/headless-shopify/") && path !== "/headless-shopify/") {
      priority = 0.6;
      changefreq = "monthly";
    } else if (
      (path.startsWith("/best-shopify-cro-agency/") && path !== "/best-shopify-cro-agency/") ||
      (path.startsWith("/shopify-development-agency/") && path !== "/shopify-development-agency/") ||
      (path.startsWith("/klaviyo-email-sms-marketing-agency/") && path !== "/klaviyo-email-sms-marketing-agency/")
    ) {
      priority = 0.6;
      changefreq = "monthly";
    } else if (path.startsWith("/for-ai/") && path !== "/for-ai/") {
      priority = 0.5;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
