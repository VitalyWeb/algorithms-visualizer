const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { CATEGORIES_SITEMAP, flatAlgorithmsSitemap } = require('./src/data/categories-sitemap');

const hostname = 'https://vitalyweb.github.io/algorithms-visualizer/';

(async () => {
  const sitemap = new SitemapStream({ hostname });

  const staticRoutes = ['/', '/about'];
  staticRoutes.forEach(path => {
    sitemap.write({ url: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date() });
  });

  CATEGORIES_SITEMAP.forEach(category => {
    sitemap.write({ url: `/category/${category.id}`, changefreq: 'weekly', priority: 0.8, lastmod: new Date() });
  });

  flatAlgorithmsSitemap.forEach(algo => {
    sitemap.write({ url: `/algo/${algo.id}`, changefreq: 'weekly', priority: 0.8, lastmod: new Date() });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream('./public/sitemap.xml').write(data.toString());
})();