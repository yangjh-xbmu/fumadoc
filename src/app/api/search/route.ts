import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('simple', {
  indexes: await Promise.all(
    source.getPages().map(async (page) => ({
      title: page.data.title,
      structuredData: page.data.structuredData,
      id: page.url,
      url: page.url,
      content: await page.data.getText('processed'),
    }))
  ),
});