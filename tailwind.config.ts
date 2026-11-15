import type {Config} from "tailwindcss";
const config:Config={content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
theme:{extend:{colors:{navy:{DEFAULT:"#0B1F3F",800:"#12294F",100:"#E6ECF6"},sky:{DEFAULT:"#1F6FEB"}},
fontFamily:{display:["Georgia","Cambria","serif"],sans:["system-ui","-apple-system","Segoe UI","Roboto","sans-serif"]}}},plugins:[]};
export default config;
