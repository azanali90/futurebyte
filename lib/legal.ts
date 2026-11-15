import {SITE} from "./site";
export const CONTACT_EMAIL=process.env.NEXT_PUBLIC_CONTACT_EMAIL||"";
export type LegalPage={slug:string;title:string;description:string;sections:{h:string;p:string[]}[]};
const N="This page is a general template, not legal advice. Have it reviewed by a qualified professional for your jurisdiction before launch.";
export const LEGAL:LegalPage[]=[
{slug:"about",title:"About Us",description:`About ${SITE.name}.`,sections:[
{h:"What we do",p:[`${SITE.name} publishes guides, tool roundups and explainers on artificial intelligence, software and digital productivity for English-speaking readers worldwide.`]},
{h:"Our editorial approach",p:["We aim to be accurate and useful. Articles are checked before publication and updated when products change. If you spot an error, please contact us."]}]},
{slug:"contact",title:"Contact Us",description:`Contact ${SITE.name}.`,sections:[
{h:"Get in touch",p:["Send questions, corrections or business enquiries by email.",CONTACT_EMAIL?`Email: ${CONTACT_EMAIL}`:"Set NEXT_PUBLIC_CONTACT_EMAIL in your environment to show your contact address here."]}]},
{slug:"privacy-policy",title:"Privacy Policy",description:`How ${SITE.name} handles information.`,sections:[
{h:"Information we collect",p:["This site does not require an account. Our hosting provider may keep standard server logs such as IP address, browser type and pages requested.","If you email us, we receive the information you send."]},
{h:"Third-party services",p:["If advertising or analytics services (for example Google AdSense or Google Analytics) are enabled, those providers may use cookies or similar technologies to serve and measure ads. Update this section to name the services you actually use and link to their policies."]},
{h:"Your choices",p:["You can control cookies in your browser settings. Depending on where you live, you may have rights to access or delete your data; contact us to make a request."]},{h:"Note",p:[N]}]},
{slug:"terms",title:"Terms and Conditions",description:`Terms of use for ${SITE.name}.`,sections:[
{h:"Use of this site",p:["By using this site you agree to use it lawfully. Content is provided for general information."]},
{h:"Intellectual property",p:["Unless stated otherwise, site content is owned by its publisher. You may quote short excerpts with attribution and a link."]},
{h:"Third-party links",p:["We link to other sites and are not responsible for their content or practices."]},{h:"Note",p:[N]}]},
{slug:"disclaimer",title:"Disclaimer",description:`Disclaimer for ${SITE.name}.`,sections:[
{h:"General information only",p:["Content is for information and education. Product features, pricing and limits change; verify details with the provider before relying on them. Nothing here is professional, financial or legal advice."]},
{h:"Advertising and affiliate links",p:["If we add advertising or affiliate links, we will disclose them clearly."]}]},
{slug:"cookie-policy",title:"Cookie Policy",description:`Cookie policy for ${SITE.name}.`,sections:[
{h:"What cookies are",p:["Cookies are small files stored on your device by websites."]},
{h:"Cookies on this site",p:["The site itself sets no cookies. Third-party services you enable later, such as advertising or analytics, may set them. If you serve ads to visitors in the UK, EU or EEA, add a consent banner that meets local rules before enabling such services."]},
{h:"Managing cookies",p:["You can block or delete cookies in your browser settings."]},{h:"Note",p:[N]}]}];
