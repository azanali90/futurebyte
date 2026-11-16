import {ARTICLE_PHOTOS} from "./photos";
import type {Article,Section} from "../articles";
type Flags={featured?:boolean;popular?:boolean;factCheck?:boolean};
// Helper that fills in the fields every article shares.
export const mk=(slug:string,title:string,category:string,excerpt:string,published:string,imageAlt:string,sections:Section[],f:Flags={}):Article=>({
slug,title,category,excerpt,author:"FutureByte Editorial",published,updated:published,
featured:!!f.featured,popular:!!f.popular,factCheck:!!f.factCheck,
image:ARTICLE_PHOTOS[slug] ?? `/images/${slug}.svg`,imageAlt,sections});
