const s=location.pathname.split("/").slice(0,-1).join("/"),r=[s+"/_app/immutable/entry/app.D66tDKhi.js",s+"/_app/immutable/nodes/0.BY6QiEE0.js",s+"/_app/immutable/nodes/1.CMpUSfjX.js",s+"/_app/immutable/nodes/2.DPE9eMo3.js",s+"/_app/immutable/assets/2.DdF9wmcs.css",s+"/_app/immutable/chunks/entry.ooHQmus8.js",s+"/_app/immutable/chunks/index.erv1zw9P.js",s+"/_app/immutable/chunks/preload-helper.D6kgxu3v.js",s+"/_app/immutable/chunks/scheduler.3uQO6TRy.js",s+"/_app/immutable/chunks/stores.C3xQrfJm.js",s+"/_app/immutable/entry/start.rBankqBL.js",s+"/_app/immutable/chunks/photoswipe.esm.GXRgw7eJ.js"],f=[s+"/.nojekyll",s+"/css/bootstrap.min.css",s+"/css/bootstrap.min.css.map",s+"/css/main.css",s+"/favicon.png",s+"/favicon.svg",s+"/font/400.woff2",s+"/font/400e.woff2",s+"/font/400i.woff2",s+"/font/400ie.woff2",s+"/font/700.woff2",s+"/font/700e.woff2",s+"/font/700i.woff2",s+"/font/700ie.woff2",s+"/js/bootstrap.bundle.min.js",s+"/js/bootstrap.bundle.min.js.map",s+"/js/bootstrap.min.js",s+"/js/bootstrap.min.js.map",s+"/manifest.json"],m="1740156287334",i=`cache-${m}`,p=[...r,...f];self.addEventListener("install",e=>{async function n(){await(await caches.open(i)).addAll(p)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const a of await caches.keys())a!==i&&await caches.delete(a)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const a=new URL(e.request.url),o=await caches.open(i);if(p.includes(a.pathname)){const t=await o.match(a.pathname);if(t)return t}try{const t=await fetch(e.request);if(!(t instanceof Response))throw new Error("invalid response from fetch");return t.status===200&&o.put(e.request,t.clone()),t}catch(t){const c=await o.match(e.request);if(c)return c;throw t}}e.respondWith(n())});
