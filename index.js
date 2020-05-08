/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable security/detect-non-literal-require */

const path = require("path");
const fs = require("fs");

const schemasDir = "schemas/";
const schemasPath = path.join(__dirname, schemasDir);

fs.readdirSync(schemasPath).forEach((schemaFile) => {
  const schema = require(path.join(schemasPath, schemaFile));
  const schemaName = schema.title;
  module.exports[`${schemaName}`] = schema;
});
