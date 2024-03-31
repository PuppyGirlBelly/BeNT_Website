import rss, { pagesGlobToRssItems, type RSSFeedItem } from '@astrojs/rss';

export async function GET(context: { site: any; }) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')) as RSSFeedItem[],
    customData: `<language>en-us</language>`,
  });
}

