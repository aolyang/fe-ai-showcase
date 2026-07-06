import { defineConfig } from 'vite';

// Serve the repo root so decks under /deck/ and shared assets under
// /.claude/skills/html-ppt/assets/ are both reachable by relative path.
// The decks use classic <script>/<link> tags (no ESM imports), so there is
// nothing for Vite to optimize — its value here is save-to-reload (HMR).
export default defineConfig({
  server: {
    open: '/deck/index.html',
    port: 5173,
    host: true,
  },
});
