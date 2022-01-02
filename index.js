/* eslint-disable global-require, import/no-dynamic-require, security/detect-non-literal-require */

const path = require("path");
const fs = require("fs");

const schemasDir = "schemas/";
const schemasPath = path.join(__dirname, schemasDir);

for (const schemaFile of fs.readdirSync(schemasPath)) {
  const schema = require(path.join(schemasPath, schemaFile));
  const schemaName = schema.title;
  module.exports[`${schemaName}`] = schema;
}

/* eslint-enable global-require, import/no-dynamic-require, security/detect-non-literal-require */
