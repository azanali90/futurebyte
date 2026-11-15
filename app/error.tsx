"use client";
export default function Error({reset}:{error:Error;reset:()=>void}){return(<div className="mx-auto max-w-xl px-4 py-24 text-center"><h1 className="font-display text-3xl font-bold text-navy">Something went wrong</h1><button onClick={reset} className="mt-6 rounded bg-navy px-5 py-2 text-white">Try again</button></div>)}
