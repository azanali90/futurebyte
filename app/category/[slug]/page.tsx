import {notFound} from "next/navigation";import ArticleCard from "@/components/ArticleCard";import AdSlot from "@/components/AdSlot";
import {CATEGORIES} from "@/lib/site";import {getCategory,inCategory} from "@/lib/articles";
export const generateStaticParams=()=>CATEGORIES.map(c=>({slug:c.slug}));
export function generateMetadata({params}:{params:{slug:string}}){const c=getCategory(params.slug);return c?{title:c.name,description:c.blurb,alternates:{canonical:`/category/${c.slug}`}}:{}}
export default function Category({params}:{params:{slug:string}}){const c=getCategory(params.slug);if(!c)notFound();const items=inCategory(c.slug);return(
<div className="mx-auto max-w-6xl px-4 py-10"><nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/">Home</a> / {c.name}</nav>
<h1 className="mt-2 font-display text-3xl font-bold text-navy">{c.name}</h1><p className="mt-1 text-slate-600">{c.blurb}</p><AdSlot/>
{items.length?<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map(a=><ArticleCard key={a.slug} a={a}/>)}</div>:<p className="text-slate-600">No articles in this category yet. Check back soon.</p>}</div>)}
