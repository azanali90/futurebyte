/** @type {import('next').NextConfig} */
const nextConfig={reactStrictMode:true,poweredByHeader:false,
images:{formats:["image/avif","image/webp"],minimumCacheTTL:2592000,dangerouslyAllowSVG:true,contentDispositionType:"attachment",contentSecurityPolicy:"default-src 'self'; script-src 'none'; sandbox;"},
async headers(){return[{source:"/images/:path*",headers:[{key:"Cache-Control",value:"public, max-age=2592000"}]}]}};
export default nextConfig;
