import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({server:{allowedHosts:["terminal.local"]},plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['brand/*.svg','images/*.webp','fonts/*.{woff2,ttf}'],manifest:{name:'Os 7 Améns da Madrugada',short_name:'7 Améns',description:'Sua jornada de sete dias de oração',start_url:'/',scope:'/',display:'standalone',theme_color:'#0a0805',background_color:'#0a0805',icons:[{src:'/brand/amens-symbol.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,ico,png,svg,webp,woff2,ttf}'],maximumFileSizeToCacheInBytes:5000000,navigateFallback:'/index.html',cleanupOutdatedCaches:true}})]});
