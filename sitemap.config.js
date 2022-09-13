// sitemap.config.js

module.exports = {
  siteUrl: 'https://www.syasou.com',
  generateRobotsTxt: false,
  sitemapSize: 7000,
  // autoLastmod: false,
  generateIndexSitemap: false,
  // outDir: './out',
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
};


// const basepath = path.resolve(__dirname, "pages");
// const allFiles = await recursive(basepath);
// const searchExtensions = [".tsx"];
// const fileList = allFiles.filter(filename => searchExtensions.includes(path.extname(filename)));
//   fileList.forEach(filename => {
//     const { ctime, mtime, atime } = fs.statSync(filename);
//     console.log({ filename, ctime, mtime, atime });
//   });

// // const postsPromise = getPosts();
// const customLastmod = async (path) => {
//   const { data: posts } = await fileList;
//   const post = posts.find();
//   // return post.updatedAt;
//   return post.ctime;
// };