const { execSync } = require('child_process');
const fs = require('fs');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kaliassistant.github.io/Lichee-Jack',
  generateRobotsTxt: true,
  outDir: 'out',
  transform: async (config, path) => {
  let filePath;

  // Handle /docs root
  if (path === '/docs') {
    filePath = 'content/docs/index.mdx';
  } else {
    filePath = `content${path}.mdx`;
    if (!fs.existsSync(filePath)) {
      filePath = `content${path}.md`;
    }
  }

  let lastmod;

  if (fs.existsSync(filePath)) {
    try {
      const result = execSync(
        `git log -1 --format=%ct -- "${filePath}"`
      )
        .toString()
        .trim();

      if (result) {
        lastmod = new Date(Number(result) * 1000).toISOString();
      }
    } catch {
      // ignore git errors
    }
  }

  return {
    loc: path,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod:
      lastmod ??
      (config.autoLastmod ? new Date().toISOString() : undefined),
    alternateRefs: config.alternateRefs ?? [],
  };
},

};




