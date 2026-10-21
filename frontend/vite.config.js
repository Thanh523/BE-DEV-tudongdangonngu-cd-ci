// Vite chạy React và hỗ trợ đường dẫn SPA như /admin/dia-diem và /tham-quan/:slug.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()], server: { port: 5173 } });
