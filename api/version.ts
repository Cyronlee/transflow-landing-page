import { readFileSync } from 'fs';
import { join } from 'path';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ReleaseCache {
  data: { version: string; url: string; release_date: string };
  fetchedAt: number;
}

const CACHE_TTL_MS = 5 * 60 * 1000;
let cache: ReleaseCache | null = null;

function readFallback() {
  const versionPath = join(process.cwd(), 'version.json');
  return JSON.parse(readFileSync(versionPath, 'utf-8'));
}

async function fetchLatestRelease() {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.data;
  }

  try {
    const resp = await fetch(
      'https://api.github.com/repos/Cyronlee/TransFlow/releases/latest',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'TransFlow-Landing',
        },
      },
    );

    if (!resp.ok) throw new Error(`GitHub API ${resp.status}`);

    const release = await resp.json();
    const tag: string = release.tag_name;
    const version = tag.replace(/^v/, '');
    const pkgAsset = release.assets?.find((a: any) =>
      a.name.endsWith('.pkg'),
    );
    const url =
      pkgAsset?.browser_download_url ??
      `https://github.com/Cyronlee/TransFlow/releases/download/${tag}/TransFlow-${version}.pkg`;
    const release_date = (release.published_at ?? '').slice(0, 10);

    const data = { version, url, release_date };
    cache = { data, fetchedAt: Date.now() };
    return data;
  } catch {
    if (cache) return cache.data;
    return readFallback();
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = await fetchLatestRelease();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: 'Failed to fetch version info' });
  }
}
