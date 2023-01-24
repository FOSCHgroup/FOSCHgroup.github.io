module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      // "/": { page: "/" },
      // "/education": { page: "/education" },
      // "/research": { page: "/research" },
      // "/resources": { page: "/resources" },
      // "/talks": { page: "/talks" },
      // "/team": { page: "/team" },
      ...defaultPathMap,
    };
  },
};
