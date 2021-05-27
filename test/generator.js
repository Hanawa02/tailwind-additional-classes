var fs = require("fs");
const additionalClasses = require("../css-generator/index.js");

function createAttribute(attribute, Attribute) {
  return { [`${attribute}`]: Attribute };
}

function createAttribute(attribute, Attribute) {
  return { [`${attribute}`]: Attribute };
}

const colorList = [{id: "light-blue" , value: "#d2e0fe"},
{id: "blue" , value: "#276afc"},
{id: "dark-blue" , value: "#0342c9"},
{id: "light-purple" , value: "#ead2fe"},
{id: "purple" , value: "#9827fc"},
{id: "dark-purple" , value: "#6d03c9"},
{id: "red" , value: "#ff0000"},
{id: "white" , value: "#ffffff"},
{id: "black" , value: "#000000"},]

for (const item of colorList) {
  const colorItem = {
    [`background-color-${item.id}`]: { ...createAttributeBackgroundColor("background-color", item.value) },
    [`text-${item.id}`]: { ...createAttribute("color", item.value) },
    [`border-color-${item.id}`]: { ...createAttribute("border-color", item.value) },
    [`shadow-elevation-${item.id}`]: { ...createAttribute("box-shadow", `0px 0px 0.5rem 0.0625rem ${item.value} `) },
  };

  colorAttributes = {
    ...colorAttributes,
    ...colorItem,
  };
}


const elements = {...additionalClasses.elements, ...colorAttributes};

const data = [];

const sizes = [
  {key: 'sm', value: '640px'},
  {key: 'md', value: '768px'},
  {key: 'lg', value: '1024px'},
  {key: 'xl', value: '1280px'}
];

for (const size of sizes){
  data.push(`@media (min-width: ${size.value}) {`);
  for (const item of Object.entries(elements)) {
    const treatedValue = JSON.stringify(item[1]).replace(/(["])/g, ' ').replace(/([,])/g, ' ; ');
    data.push(`.${size.key}\:${item[0]} ${treatedValue}`);
  }
  data.push(' }');
}

for (const item of Object.entries(elements)) {
  const treatedValue = JSON.stringify(item[1]).replace(/(["])/g, ' ').replace(/([,])/g, ' ; ');
  data.push(`.${item[0]} ${treatedValue}`);

  data.push(`.hover\:${item[0]}\:hover ${treatedValue}`);
}

fs.writeFile(
  "./test/tailwindAdditionalClasses.css",
  data.join(" ").replace(/([\{])/g, '\{\n').replace(/([\}])/g, ';\}\n').replace(/([\;])/g, '\;\n'),
  function (err) {
    if (err) throw err;
  }
);
console.log(
  "Test completed, see elements.json file to see the elements generated!"
);
