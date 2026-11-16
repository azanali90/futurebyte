import {CATEGORIES} from "./site";
import {LATEST_ARTICLES} from "./content/latest";
import {AI_ARTICLES} from "./content/ai";import {AITOOLS_ARTICLES} from "./content/aitools";import {TECH_ARTICLES} from "./content/tech";
import {SOFTWARE_ARTICLES} from "./content/software";import {HOWTO_ARTICLES} from "./content/howto";
import {PRODUCTIVITY_ARTICLES} from "./content/productivity";import {ONLINE_ARTICLES} from "./content/online";
export type Block=string|{list:string[]};
export type Section={h2:string;body?:Block[];h3?:{title:string;body?:Block[]}[]};
export type Article={slug:string;title:string;category:string;excerpt:string;author:string;published:string;updated:string;featured:boolean;popular:boolean;factCheck:boolean;image:string;imageAlt:string;sections:Section[]};
// Each article: sections = [{h2, body:[paragraphs or {list:[...]}], h3?:[{title,body}]}]
// factCheck:true => verify claims, pricing and features before publishing.
export const ARTICLES:Article[]=[
{slug:"best-free-ai-tools-2026",title:"Best Free AI Tools in 2026: A Practical Starter Guide",category:"ai-tools",
 excerpt:"A category-by-category guide to free AI tools for writing, images, research and note-taking.",
 author:"FutureByte Editorial",published:"2026-01-15",updated:"2026-01-15",featured:true,popular:true,factCheck:true,
 image:"/images/photos/computer-desk.jpg",imageAlt:"People reviewing information together on a laptop screen",
 sections:[
 {h2:"How to choose a free AI tool",body:["Free plans change often. Before relying on any tool, check its current usage limits, data policy and whether your work can be used for model training.",{list:["Define the job first: writing, images, research or automation.","Read the privacy policy before uploading sensitive files.","Compare the free tier against the paid tier so you know what you give up."]}]},
 {h2:"Categories worth exploring",h3:[
  {title:"General-purpose AI assistants",body:["Assistants from major providers such as OpenAI, Anthropic and Google offer free tiers for drafting, summarising and brainstorming. Limits and model access vary, so confirm on each provider's site."]},
  {title:"AI image generators",body:["Several services let you create images from text prompts on free plans. See our <a href='/articles/free-ai-image-generators-guide'>guide to free AI image generators</a> for what to compare."]},
  {title:"AI research and note tools",body:["Tools that summarise documents or answer questions about your own notes can save reading time. Always verify important claims against the source."]}]},
 {h2:"Using AI tools responsibly",body:["AI output can be wrong. Treat it as a first draft, check facts, and disclose AI use where your employer, school or publisher requires it. Related reading: <a href='/articles/ai-productivity-guide'>How to use AI to improve productivity</a>."]}]},
{slug:"ai-productivity-guide",title:"How to Use AI to Improve Productivity",category:"digital-productivity",
 excerpt:"Five realistic ways to use AI assistants for everyday work without losing quality or control.",
 author:"FutureByte Editorial",published:"2026-01-22",updated:"2026-01-22",featured:true,popular:false,factCheck:false,
 image:"/images/photos/laptop-typing.jpg",imageAlt:"Overhead view of people working on laptops with connected drives",
 sections:[
 {h2:"Start with repetitive tasks",body:["The best early wins are tasks you already understand well, so you can judge the output quickly.",{list:["Drafting and rewriting emails","Summarising meeting notes you provide","Turning rough outlines into structured documents","Brainstorming options before you decide"]}]},
 {h2:"Write better prompts",h3:[
  {title:"Give context",body:["State your goal, audience and format. A prompt that says who the reader is and what you want back gets more useful results."]},
  {title:"Iterate",body:["Treat the first answer as a draft. Ask for changes, shorter versions or different tones."]}]},
 {h2:"Keep a human in the loop",body:["Review every output before it is sent or published, and avoid pasting confidential data into tools your organisation has not approved. For tool ideas, see <a href='/articles/best-free-ai-tools-2026'>Best Free AI Tools in 2026</a>."]}]},
...LATEST_ARTICLES,...AI_ARTICLES,...AITOOLS_ARTICLES,...TECH_ARTICLES,...SOFTWARE_ARTICLES,...HOWTO_ARTICLES,...PRODUCTIVITY_ARTICLES,...ONLINE_ARTICLES
];
export const blocksOf=(b?:Block[]|null):Block[]=>Array.isArray(b)?b:[];
export const wordCount=(a:Article)=>(a.sections||[]).flatMap(s=>[...blocksOf(s.body),...(s.h3||[]).flatMap(x=>blocksOf(x.body))]).map(b=>typeof b==="string"?b:(b.list||[]).join(" ")).join(" ").split(/\s+/).filter(Boolean).length;
export const readingTime=(a:Article)=>Math.max(2,Math.ceil(wordCount(a)/220));
export const slugify=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
export const getArticle=(s:string)=>ARTICLES.find(a=>a.slug===s);
export const getCategory=(s:string)=>CATEGORIES.find(c=>c.slug===s);
export const byDate=()=>[...ARTICLES].sort((a,b)=>b.published.localeCompare(a.published));
export const inCategory=(s:string)=>byDate().filter(a=>a.category===s);
export const related=(a:Article)=>byDate().filter(x=>x.slug!==a.slug).sort((x,y)=>Number(y.category===a.category)-Number(x.category===a.category)).slice(0,3);
const textOf=(a:Article)=>[a.title,a.excerpt,getCategory(a.category)?.name||a.category,...a.sections.flatMap(s=>[s.h2,...blocksOf(s.body).map(b=>typeof b==="string"?b:b.list.join(" ")),...(s.h3||[]).flatMap(x=>[x.title,...blocksOf(x.body).map(b=>typeof b==="string"?b:b.list.join(" "))])])].join(" ").toLowerCase();
export const search=(q:string)=>{const t=q.toLowerCase().split(/\s+/).filter(Boolean);return byDate().filter(a=>{const x=textOf(a);return t.every(w=>x.includes(w))})};
