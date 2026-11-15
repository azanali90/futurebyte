import Image from "next/image";import {notFound} from "next/navigation";import AdSlot from "@/components/AdSlot";import ArticleCard from "@/components/ArticleCard";
import {type Block,blocksOf,ARTICLES,getArticle,getCategory,readingTime,related,slugify} from "@/lib/articles";import {SITE} from "@/lib/site";
export const generateStaticParams=()=>ARTICLES.map(a=>({slug:a.slug}));
export function generateMetadata({params}:{params:{slug:string}}){const a=getArticle(params.slug);if(!a)return{};
return{title:a.title,description:a.excerpt,alternates:{canonical:`/articles/${a.slug}`},openGraph:{type:"article",title:a.title,description:a.excerpt,url:`/articles/${a.slug}`,images:[a.image],publishedTime:a.published,modifiedTime:a.updated}}}
const Body=({b}:{b:Block})=>typeof b==="string"?<p dangerouslySetInnerHTML={{__html:b}}/>:<ul>{(b.list||[]).map(i=><li key={i}>{i}</li>)}</ul>;
export default function Article({params}:{params:{slug:string}}){const a=getArticle(params.slug);if(!a)notFound();const c=getCategory(a.category);if(!c)notFound();const url=`${SITE.url}/articles/${a.slug}`;
const ld={"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.excerpt,image:SITE.url+a.image,datePublished:a.published,dateModified:a.updated,author:{"@type":"Person",name:a.author},publisher:{"@type":"Organization",name:SITE.name},mainEntityOfPage:url};
const share=[["X",`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(a.title)}`],["LinkedIn",`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],["Facebook",`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`]];
return(<div className="mx-auto max-w-3xl px-4 py-10"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
<nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/">Home</a> / <a href={`/category/${c.slug}`}>{c.name}</a></nav>
<h1 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">{a.title}</h1>
<p className="mt-3 text-sm text-slate-500">By {a.author} · Published {a.published} · Updated {a.updated} · {readingTime(a)} min read</p>
{a.factCheck&&<p className="mt-3 rounded bg-amber-50 p-3 text-sm text-amber-900">Editorial note: verify pricing, features and limits before publishing. Remove this notice once checked.</p>}
<Image src={a.image} alt={a.imageAlt} width={1200} height={630} priority sizes="(min-width:768px) 768px,100vw" className="mt-6 w-full rounded-lg"/>
<nav aria-label="Table of contents" className="my-6 rounded-lg bg-navy-100 p-4"><h2 className="font-display font-bold text-navy">In this article</h2><ul className="mt-2 list-disc pl-5 text-sm">{a.sections.map(s=><li key={s.h2}><a className="text-sky" href={`#${slugify(s.h2)}`}>{s.h2}</a></li>)}</ul></nav>
<AdSlot/>
<div className="prose-fb">{a.sections.map(s=><section key={s.h2}><h2 id={slugify(s.h2)}>{s.h2}</h2>{blocksOf(s.body).map((b,i)=><Body key={i} b={b}/>)}{(s.h3||[]).map(h=><div key={h.title}><h3>{h.title}</h3>{blocksOf(h.body).map((b,i)=><Body key={i} b={b}/>)}</div>)}</section>)}</div>
<div className="mt-8 flex flex-wrap items-center gap-3 text-sm"><span className="font-semibold text-navy">Share:</span>{share.map(([n,h])=><a key={n} href={h} target="_blank" rel="noopener noreferrer" className="rounded border border-slate-300 px-3 py-1 text-navy hover:border-sky">{n}</a>)}</div>
<AdSlot/><h2 className="mb-4 font-display text-2xl font-bold text-navy">Related articles</h2><div className="grid gap-6 sm:grid-cols-2">{related(a).slice(0,2).map(r=><ArticleCard key={r.slug} a={r}/>)}</div></div>)}
