import {notFound} from "next/navigation";import type {Metadata} from "next";import {LEGAL} from "@/lib/legal";
export const dynamicParams=false;
export const generateStaticParams=()=>LEGAL.map(l=>({page:l.slug}));
export function generateMetadata({params}:{params:{page:string}}):Metadata{const l=LEGAL.find(x=>x.slug===params.page);return l?{title:l.title,description:l.description,alternates:{canonical:`/${l.slug}`}}:{}}
export default function Legal({params}:{params:{page:string}}){const l=LEGAL.find(x=>x.slug===params.page);if(!l)notFound();return(
<div className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-display text-3xl font-bold text-navy">{l.title}</h1>
<div className="prose-fb mt-6">{l.sections.map(s=><section key={s.h}><h2>{s.h}</h2>{s.p.map(t=><p key={t}>{t}</p>)}</section>)}</div></div>)}
