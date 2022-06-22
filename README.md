# @fiug/handlebars-esm
a port of Handlebars to esm compatable module


## Usage

in browser
```handlebars
{{!-- template.hbs --}}
<div>
  foo = "{{foo}}"
</div>
```

```javascript
// module.mjs
import handlebars from "https://unpkg.com/@fiug/handlebars-esm";

const template = await handlebars.compile({
  path: new URL(import.meta.url).href + '/../template.hbs'
});

const templateVars = {
  foo: "bar"
};

document.body.innerHTML = template(templateVars);

```

in node

```
npm i @fiug/handlebars-esm --save
```

```javascript
import Handlebars from "@fiug/handlebars-esm";

const template = handlebars.compile(`
<div>
  foo = "{{foo}}"
</div>
`);

const templateVars = {
  foo: "bar"
};

console.log(template(templateVars));
```
