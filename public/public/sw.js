if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2e88fece0ede7e7e784005c34a27b526"},{url:"/_next/static/BSg5dzjjHwIeZhRmIBCjY/_buildManifest.js",revision:"f71f45d17e059b09c753c2b0ee945a9e"},{url:"/_next/static/BSg5dzjjHwIeZhRmIBCjY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/497-6ef983ff1967dc74.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/_next/static/chunks/app/layout-2dd2d21883e60ca4.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/_next/static/chunks/app/page-aefc30016d62fc81.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/_next/static/chunks/main-8d852c8906cdbe17.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/_next/static/chunks/main-app-d3c86ab3e1d1d749.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/_next/static/chunks/pages/_app-ad499c570f8bb53e.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/_next/static/chunks/pages/_error-d83bf13b731e85eb.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8074fabf81ca3fbd.js",revision:"BSg5dzjjHwIeZhRmIBCjY"},{url:"/favicon.ico",revision:"ad9466b5973e1742d2c698b4da68b30c"},{url:"/favicon/android-chrome-192x192.png",revision:"f3338ffd752ec44d3d8716b7646e66e7"},{url:"/favicon/android-chrome-512x512.png",revision:"30df2c14fd3b1fd702ca6273345aa234"},{url:"/favicon/apple-touch-icon.png",revision:"1e4638d2944d7aaf6e81425e3ec485a5"},{url:"/favicon/browserconfig.xml",revision:"d9502087c5a3e5391088246e51544455"},{url:"/favicon/favicon-16x16.png",revision:"178db1ccccca754e5a4f8f1faca91161"},{url:"/favicon/favicon-32x32.png",revision:"a9a9a7d9541e209a2e33be1da1ac15fe"},{url:"/favicon/favicon.ico",revision:"ad9466b5973e1742d2c698b4da68b30c"},{url:"/favicon/large-og.jpg",revision:"54cbf4b8f396a652ed05c560e0b6d003"},{url:"/favicon/mstile-150x150.png",revision:"fe5e3bc715be6c8fa69882dbf3675ce1"},{url:"/favicon/safari-pinned-tab.svg",revision:"9245af9238a9c797a4044870c817271f"},{url:"/favicon/site.webmanifest",revision:"19618b2da506b5d6afda538f1d41e15c"},{url:"/fonts/inter-var-latin.woff2",revision:"812b3dd29751112389e93387c4f7dd0a"},{url:"/images/new-tab.png",revision:"b2001de5c7ebe41cf372e676d09014f4"},{url:"/svg/Vercel.svg",revision:"c7d8efd08fe7e7a36a602b096e779a38"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
