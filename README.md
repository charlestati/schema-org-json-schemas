# Schema.org to JSON Schema

[![Build Status](https://travis-ci.org/charlestati/schema-org-json-schemas.svg?branch=master)](https://travis-ci.org/charlestati/schema-org-json-schemas)

**Generate JSON Schemas from Schema.org classes**

You can find the generated schemas in the [`schemas/` directory](schemas).

To match the JSON-LD approach, properties that accept an array also accept a single value.

## Example

### Schema.org class for a Book

| Property      | Expected Type  | Description                                        |
| ------------- | -------------- | -------------------------------------------------- |
| abridged      | Boolean        | Indicates whether the book is an abridged edition. |
| bookEdition   | Text           | The edition of the book.                           |
| bookFormat    | BookFormatType | The format of the book.                            |
| illustrator   | Person         | The illustrator of the book.                       |
| isbn          | Text           | The ISBN of the book.                              |
| numberOfPages | Integer        | The number of pages in the book.                   |

### Generated JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://schema.org/Book",
  "title": "Book",
  "description": "A book.",
  "type": "object",
  "format": "http://schema.org/Book",
  "allOf": [
    {
      "description": "The most generic kind of creative work, including books, movies, photographs, software programs, etc.",
      "$ref": "CreativeWork.schema.json"
    }
  ],
  "properties": {
    "@context": { "const": "https://schema.org" },
    "@type": { "const": "Book" },
    "bookEdition": {
      "description": "The edition of the book.",
      "type": "string"
    },
    "bookFormat": {
      "description": "The format of the book.",
      "$ref": "BookFormatType.schema.json"
    },
    "illustrator": {
      "description": "The illustrator of the book.",
      "$ref": "Person.schema.json"
    },
    "isbn": { "description": "The ISBN of the book.", "type": "string" },
    "numberOfPages": {
      "description": "The number of pages in the book.",
      "type": "integer"
    }
  },
  "required": ["@type"]
}
```

## To do

- Hardcode the [identifiers schemas](https://schema.org/identifier) with [regular expressions](https://json-schema.org/understanding-json-schema/reference/regular_expressions.html)
- Hardcode the inferred property multiplicity after manually checking it

## Credits

Thanks to [geraintluff](https://github.com/geraintluff/schema-org-gen) for the property multiplicity and the hardcoded schemas (licensed under the [MIT License](https://opensource.org/licenses/MIT)).
