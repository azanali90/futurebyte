import Link from "next/link";import Image from "next/image";import {getCategory,readingTime,type Article} from "@/lib/articles";
export default function ArticleCard({a}:{a:Article}){return(
<article className="article-card overflow-hidden rounded-2xl border border-slate-200 bg-white">
<Link href={`/articles/${a.slug}`}><Image src={a.image} alt={a.imageAlt} width={640} height={360} sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw" className="h-44 w-full object-cover"/></Link>
<div className="p-5"><p className="text-sm text-sky">{getCategory(a.category)?.name}</p>
<h3 className="mt-1 font-display text-lg font-bold text-navy"><Link href={`/articles/${a.slug}`} className="hover:underline">{a.title}</Link></h3>
<p className="mt-2 text-sm text-slate-600">{a.excerpt}</p>
<p className="mt-3 text-xs text-slate-500">{a.published} · {readingTime(a)} min read</p></div></article>)}
