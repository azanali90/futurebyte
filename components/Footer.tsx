import Link from "next/link";import Logo from "./Logo";import {CATEGORIES,SITE} from "@/lib/site";
const LEGAL=[["About Us","/about"],["Contact Us","/contact"],["Privacy Policy","/privacy-policy"],["Terms and Conditions","/terms"],["Disclaimer","/disclaimer"],["Cookie Policy","/cookie-policy"]];
export default function Footer(){return(
<footer className="mt-16 bg-navy text-slate-200"><div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
<div><div className="rounded bg-white p-2 inline-block"><Logo/></div><p className="mt-3 text-sm">{SITE.tagline}</p></div>
<nav aria-label="Categories"><h2 className="mb-2 font-bold text-white">Categories</h2>{CATEGORIES.map(c=><Link key={c.slug} href={`/category/${c.slug}`} className="block py-0.5 text-sm hover:text-white">{c.name}</Link>)}</nav>
<nav aria-label="Legal"><h2 className="mb-2 font-bold text-white">Company</h2>{LEGAL.map(([n,h])=><Link key={h} href={h} className="block py-0.5 text-sm hover:text-white">{n}</Link>)}</nav></div>
<p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></footer>)}
