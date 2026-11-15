import {mk} from "./mk";
export const AI_ARTICLES=[
mk("what-is-artificial-intelligence","What Is Artificial Intelligence? A Plain-English Explainer","artificial-intelligence",
"A clear introduction to what AI is, the main types you will hear about, and where you already use it every day.","2026-01-29","Abstract illustration of a glowing neural network",[
{h2:"AI in one paragraph",body:["Artificial intelligence (AI) is the branch of computer science that builds systems able to do tasks which normally need human judgement, such as recognising speech, translating languages, spotting patterns in data, or writing text and creating images. Instead of following a fixed list of rules written by a programmer, most modern AI learns patterns from large numbers of examples."]},
{h2:"How AI differs from ordinary software",body:["Traditional software does exactly what its code says. If the rules are incomplete, it fails. AI systems are trained: they are shown many examples and adjust themselves until they get good at the task.",{list:["Ordinary software: rules in, answers out.","Machine learning: examples and answers in, rules out.","The result is a model that can handle new inputs it has never seen, but that can also be wrong in surprising ways."]}]},
{h2:"The main types of AI you will hear about",h3:[
 {title:"Machine learning",body:["Algorithms that improve with data. Spam filters, recommendation lists and fraud detection are typical examples."]},
 {title:"Deep learning",body:["A kind of machine learning that uses many-layered neural networks. It powers modern speech recognition, image recognition and language models."]},
 {title:"Generative AI",body:["Systems that create new content such as text, images, audio or code, based on patterns learned from training data."]}]},
{h2:"Where you already meet AI",body:[{list:["Search engines ranking and summarising results","Phone cameras improving photos automatically","Navigation apps predicting traffic","Email filters catching spam","Streaming services suggesting what to watch next"]}]},
{h2:"What AI cannot do",body:["AI does not understand the world the way people do. It can sound confident while being wrong, and it can reflect biases in its training data. Read more in <a href='/articles/ai-limitations-and-risks'>AI Hallucinations, Bias and Other Limits</a>, and see how language models work in <a href='/articles/how-large-language-models-work'>How Large Language Models Work</a>."]}],{featured:true}),

mk("how-large-language-models-work","How Large Language Models Work, Without the Jargon","artificial-intelligence",
"What is happening behind an AI chatbot: training, tokens, prediction and why the answers can sound so human.","2026-02-12","Abstract illustration of text flowing through connected nodes",[
{h2:"The core idea: predicting the next piece of text",body:["A large language model (LLM) is a neural network trained on a huge amount of text. Its basic job is simple to state: given some text, predict what is likely to come next. Repeating that prediction one small step at a time produces whole sentences, answers and essays."]},
{h2:"Step 1: Breaking text into tokens",body:["Models do not read words the way we do. Text is split into small units called tokens, which can be whole words, parts of words or punctuation. Each token is turned into numbers the network can work with."]},
{h2:"Step 2: Training",body:["During training the model sees enormous amounts of text and repeatedly tries to predict missing pieces. Each time it is wrong, its internal settings (called parameters) are adjusted slightly. After many rounds, it captures grammar, facts, writing styles and common reasoning patterns.",{list:["Pre-training: learning general language patterns from large text collections.","Fine-tuning: further training on examples of helpful, safe conversations.","Human feedback: people rate answers so the model learns which ones are preferred."]}]},
{h2:"Step 3: Answering your prompt",body:["When you type a prompt, the model converts it to tokens, calculates probabilities for the next token, picks one, and repeats. A setting often called temperature controls how adventurous the choice is: lower values give safer, more predictable text, higher values give more varied text."]},
{h2:"Why this matters for you",h3:[
 {title:"Fluent does not mean correct",body:["The model optimises for plausible text, not verified truth. Always check important facts."]},
 {title:"Context shapes the answer",body:["The more clearly you describe your goal, audience and format, the better the result. See <a href='/articles/how-to-write-effective-ai-prompts'>How to Write Effective AI Prompts</a>."]}]}]),

mk("ai-limitations-and-risks","AI Hallucinations, Bias and Other Limits You Should Know","artificial-intelligence",
"AI tools are useful but imperfect. Learn the common failure modes and simple habits that keep you safe.","2026-02-26","Abstract illustration of a warning triangle over a network",[
{h2:"Why AI makes mistakes",body:["AI models learn statistical patterns, not verified facts. That makes them powerful for drafting and summarising, but it also means they can produce errors that look perfectly reasonable."]},
{h2:"The most common problems",h3:[
 {title:"Hallucinations",body:["A hallucination is a confident answer that is invented or wrong, such as a fake citation, a made-up statistic or a feature that does not exist. They are more likely when the question is obscure or when the model is pushed to give a specific answer it does not have."]},
 {title:"Bias",body:["Models learn from human-written data, which contains stereotypes and gaps. Outputs can therefore favour some groups or viewpoints over others."]},
 {title:"Outdated knowledge",body:["A model only knows what was in its training data. Unless it is connected to search, it may not know recent events, prices or product changes."]},
 {title:"Privacy",body:["Text you paste into an online tool may be stored or reviewed according to that provider's policy. Avoid sharing passwords, personal records or confidential business data."]}]},
{h2:"Habits that reduce risk",body:[{list:["Verify names, numbers, quotes and links against a trusted source.","Ask the tool to show its sources, then open them yourself.","Treat AI output as a first draft, not a final answer.","Keep sensitive data out of tools your organisation has not approved.","Be transparent about AI use where rules require it."]}]},
{h2:"A balanced view",body:["These limits are not a reason to avoid AI, only to use it with care. New to the topic? Start with <a href='/articles/what-is-artificial-intelligence'>What Is Artificial Intelligence?</a>"]}])
];
