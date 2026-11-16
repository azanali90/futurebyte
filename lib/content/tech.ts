import {mk} from "./mk";
export const TECH_ARTICLES=[
mk("what-is-cloud-computing","What Is Cloud Computing? A Beginner's Guide","technology",
"Cloud computing explained: what it is, the main service models and why so many apps now run in the cloud.","2026-04-07","Network cables and equipment inside server cabinets",[
{h2:"The simple definition",body:["Cloud computing means using computing resources such as servers, storage and software over the internet instead of owning and running them yourself. You pay for what you use, much like electricity."]},
{h2:"The three service models",h3:[
 {title:"Infrastructure as a Service (IaaS)",body:["You rent raw computing power, storage and networking and manage everything on top yourself."]},
 {title:"Platform as a Service (PaaS)",body:["The provider manages the servers and operating system so developers can focus on their code."]},
 {title:"Software as a Service (SaaS)",body:["Finished applications you open in a browser, such as email, online documents and video meetings."]}]},
{h2:"Why people use the cloud",body:[{list:["Scale up or down quickly as demand changes","Lower up-front cost than buying hardware","Access from any device with an internet connection","Built-in backups and reliability options"]}]},
{h2:"Things to consider",body:["Cloud services depend on an internet connection, and costs can grow if usage is not monitored. Review where your data is stored and how it is protected. To protect your own cloud accounts, read <a href='/articles/how-to-secure-your-online-accounts'>How to Secure Your Online Accounts</a>."]}]),

mk("how-the-internet-works","How the Internet Works: From Click to Web Page","technology",
"Follow a single web request from your browser to a server and back, and learn what DNS, IP addresses and HTTPS do.","2026-04-21","Network cables and equipment inside server cabinets",[
{h2:"The internet is a network of networks",body:["The internet connects millions of smaller networks owned by companies, universities, governments and internet service providers (ISPs). They agree on shared rules, called protocols, so any device can talk to any other."]},
{h2:"What happens when you open a website",body:[{list:["Your browser asks a DNS server to translate the name (such as example.com) into an IP address.","Your request travels through your ISP and several routers to the server at that address.","The server sends back the page's files: HTML, images, styles and scripts.","Your browser assembles those files into the page you see."]}]},
{h2:"Key terms explained",h3:[
 {title:"IP address",body:["A numeric address that identifies a device or server on a network."]},
 {title:"DNS",body:["The internet's phone book, which maps readable names to IP addresses."]},
 {title:"HTTPS",body:["The secure version of the web protocol. It encrypts data between you and the site so others on the network cannot read it."]},
 {title:"Data packets",body:["Information is split into small packets that can take different routes and are reassembled at the destination."]}]},
{h2:"Why it matters",body:["Knowing the basics helps you troubleshoot slow pages, understand privacy risks on public Wi-Fi and judge which sites are safe. Look for HTTPS, but remember it only means the connection is encrypted, not that the site is trustworthy."]}]),

mk("cybersecurity-basics-for-everyone","Cybersecurity Basics Everyone Should Know","technology",
"The most common online threats and the everyday habits that protect you from them.","2026-05-05","Person holding a payment card while using a laptop",[
{h2:"Why basics matter",body:["Most attacks do not rely on advanced hacking. They trick people into giving away passwords or installing harmful software. A few good habits block most of them."]},
{h2:"Common threats",h3:[
 {title:"Phishing",body:["Fake emails, texts or sites that imitate a trusted brand to steal logins or payment details. Check the sender and never enter passwords after clicking a surprise link."]},
 {title:"Malware",body:["Harmful software such as viruses and ransomware, often spread through unofficial downloads or infected attachments."]},
 {title:"Weak or reused passwords",body:["If one site is breached, attackers try the same password elsewhere."]}]},
{h2:"Habits that protect you",body:[{list:["Use a unique password for every account.","Turn on two-factor authentication wherever it is offered.","Install system and app updates promptly.","Download software only from official sources.","Back up important files regularly."]}]},
{h2:"Next steps",body:["Start with the practical guides on <a href='/articles/how-to-secure-your-online-accounts'>securing your accounts</a>, <a href='/articles/password-managers-explained'>password managers</a> and <a href='/articles/how-to-back-up-your-files'>backing up your files</a>."]}])
];
