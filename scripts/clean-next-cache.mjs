import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const nextDir = path.resolve(projectRoot, '.next');
const cacheDir = path.join(nextDir, 'cache');

if (fs.existsSync(cacheDir)) {
  console.log('[clean-next-cache] Pruning .next/cache to satisfy Cloudflare Workers 25MB asset limit...');
  fs.rmSync(cacheDir, { recursive: true, force: true });
  console.log('[clean-next-cache] Successfully purged .next/cache.');
}

const assetsIgnorePatterns = `# Cloudflare Workers Static Assets ignore list
cache/**
.cache/**
*.pack
*.pack.gz
*.nft.json
trace
`;

if (fs.existsSync(nextDir)) {
  fs.writeFileSync(path.join(nextDir, '.assetsignore'), assetsIgnorePatterns, 'utf8');
  console.log('[clean-next-cache] Created .next/.assetsignore');
}
