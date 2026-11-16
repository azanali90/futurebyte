import Link from "next/link";import Logo from "./Logo";import {CATEGORIES} from "@/lib/site";
export default function Header(){return(
<header className="site-header sticky top-0 z-30 border-b border-slate-200 bg-white">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
<Link href="/"><Logo/></Link>
<nav aria-label="Main" className="hidden gap-5 text-sm lg:flex">{CATEGORIES.map(c=><Link key={c.slug} href={`/category/${c.slug}`} className="text-navy hover:text-sky">{c.name}</Link>)}</nav>
<form action="/search" className="hidden sm:block"><input name="q" type="search" placeholder="Search articles" aria-label="Search articles" className="w-44 rounded border border-slate-300 px-3 py-1.5 text-sm"/></form>
<details className="relative lg:hidden"><summary className="cursor-pointer list-none rounded border border-slate-300 px-3 py-1.5 text-sm text-navy">Menu</summary>
<div className="absolute right-0 mt-2 w-64 rounded border border-slate-200 bg-white p-3 shadow-lg"><form action="/search" className="mb-2"><input name="q" type="search" placeholder="Search articles" aria-label="Search articles" className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm"/></form>
{CATEGORIES.map(c=><Link key={c.slug} href={`/category/${c.slug}`} className="block py-1.5 text-navy">{c.name}</Link>)}</div></details>
</div></header>)}
