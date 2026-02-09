import { readFileSync } from 'fs';
import { join } from 'path';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const versionPath = join(process.cwd(), 'version.json');
    const versionData = JSON.parse(readFileSync(versionPath, 'utf-8'));
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(versionData);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to read version info' });
  }
}
