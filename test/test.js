var fs = require("fs");
const additionalClasses = require("../main.js");

additionalClasses.pluginFunction({
  addUtilities: (item) => {
    fs.writeFile("./test/elements.json", JSON.stringify(item), function (err) {
      if (err) throw err;
    });
    console.log(
      "Test completed, see elements.json file to see the elements generated!"
    );
  },
});
