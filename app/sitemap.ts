import type {MetadataRoute} from "next";import {LEGAL} from "@/lib/legal";import {ARTICLES} from "@/lib/articles";import {CATEGORIES,SITE} from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const u=(p:string)=>`${SITE.url}${p}`;
return[{url:u("/"),lastModified:new Date()},...CATEGORIES.map(c=>({url:u(`/category/${c.slug}`)})),...LEGAL.map(l=>({url:u(`/${l.slug}`)})),...ARTICLES.map(a=>({url:u(`/articles/${a.slug}`),lastModified:a.updated}))]}
