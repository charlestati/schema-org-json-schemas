/*
 * Copyright 2020 Charles Tatibouët
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require("fs-extra");
const { castArray } = require("lodash");
const axios = require("axios");
const Ajv = require("ajv");
const HttpStatus = require("http-status-codes");
const { main, buildSchema } = require("../build_schemas");

const schemaOrgSchemas = require("./schema.json");

jest.mock("axios");
jest.mock("fs-extra");

let schemaClasses;
let properties;
let enumValues;

beforeEach(() => {
  const graph = schemaOrgSchemas["@graph"];
  schemaClasses = graph.filter((vocabulary) =>
    castArray(vocabulary["@type"]).includes("rdfs:Class"),
  );
  properties = graph.filter((vocabulary) =>
    castArray(vocabulary["@type"]).includes("rdf:Property"),
  );
  enumValues = graph.filter((vocabulary) =>
    castArray(vocabulary["@type"]).some(
      (type) =>
        type.startsWith("http://schema.org/") &&
        type !== "http://schema.org/DataType",
    ),
  );
});

it("should build the JSON Schema of Person", async () => {
  const schemaClass = schemaClasses.find(
    (schema) => schema["@id"] === "http://schema.org/Person",
  );
  const schema = buildSchema(
    schemaClass,
    schemaClasses,
    properties,
    enumValues,
  );
  expect(schema).toMatchSnapshot();
});

it("should build the JSON Schema of SpeakableSpecification", async () => {
  const schemaClass = schemaClasses.find(
    (schema) => schema["@id"] === "http://schema.org/SpeakableSpecification",
  );
  const schema = buildSchema(
    schemaClass,
    schemaClasses,
    properties,
    enumValues,
  );
  expect(schema).toMatchSnapshot();
});

it("should build the JSON Schema of FoodEstablishment", async () => {
  const schemaClass = schemaClasses.find(
    (schema) => schema["@id"] === "http://schema.org/FoodEstablishment",
  );
  const schema = buildSchema(
    schemaClass,
    schemaClasses,
    properties,
    enumValues,
  );
  expect(schema).toMatchSnapshot();
});

it("should build the JSON Schema of Event", async () => {
  const schemaClass = schemaClasses.find(
    (schema) => schema["@id"] === "http://schema.org/Event",
  );
  const schema = buildSchema(
    schemaClass,
    schemaClasses,
    properties,
    enumValues,
  );
  expect(schema).toMatchSnapshot();
});

it("should build valid JSON Schemas", () => {
  const schemas = schemaClasses.map((schemaClass) => {
    return buildSchema(schemaClass, schemaClasses, properties, enumValues);
  });
  expect(() => {
    // eslint-disable-next-line no-new
    new Ajv({ schemas });
  }).not.toThrow();
});

it("should fetch data and write to file", async () => {
  axios.get.mockResolvedValue({
    status: HttpStatus.OK,
    data: schemaOrgSchemas,
  });
  fs.ensureDir.mockImplementation(() => Promise.resolve());
  await main();
  expect(axios.get).toHaveBeenCalled();
  expect(fs.writeFileSync).toHaveBeenCalledTimes(
    schemaClasses.filter(
      (schemaClass) =>
        !castArray(schemaClass["@type"]).includes("http://schema.org/DataType"),
    ).length,
  );
});
