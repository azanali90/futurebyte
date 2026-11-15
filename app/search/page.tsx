import ArticleCard from "@/components/ArticleCard";import {search} from "@/lib/articles";
export const metadata={title:"Search",robots:{index:false}};
export default function Search({searchParams}:{searchParams:{q?:string}}){const q=(searchParams.q||"").toString().trim();const r=q?search(q):[];return(
<div className="mx-auto max-w-6xl px-4 py-10"><h1 className="font-display text-3xl font-bold text-navy">{q?`Results for “${q}”`:"Search"}</h1>
{q&&!r.length&&<p className="mt-4 text-slate-600">No articles matched. Try fewer or different keywords.</p>}
<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{r.map(a=><ArticleCard key={a.slug} a={a}/>)}</div></div>)}
