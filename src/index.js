import Handlebars from "handlebars/dist/handlebars.js";

const originalCompile = Handlebars.compile;

Handlebars.compile = (arg) => {
  if(typeof arg === "string") return originalCompile(arg);
  const { path, text } = arg || {};
  if(!path) return originalCompile(text || "");
  if(typeof fetch === "undefined") return "";

  return (async () => {
    const source = await fetch(path).then(x => x.text());
    const template = originalCompile(source);
    return template;
  })();
};

export default Handlebars;
