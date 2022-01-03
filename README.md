# Schema.org to JSON Schema

[![CircleCI](https://circleci.com/gh/charlestati/schema-org-json-schemas.svg?style=svg)](https://circleci.com/gh/charlestati/schema-org-json-schemas)

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
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "schema:Book",
  "title": "Book",
  "description": "A book.",
  "type": "object",
  "allOf": [
    {
      "description": "The most generic kind of creative work, including books, movies, photographs, software programs, etc.",
      "$ref": "schema:CreativeWork"
    }
  ],
  "properties": {
    "abridged": {
      "description": "Indicates whether the book is an abridged edition.",
      "type": "boolean"
    },
    "bookEdition": {
      "description": "The edition of the book.",
      "type": "string"
    },
    "bookFormat": {
      "description": "The format of the book.",
      "$ref": "schema:BookFormatType"
    },
    "illustrator": {
      "description": "The illustrator of the book.",
      "$ref": "schema:Person"
    },
    "isbn": { "description": "The ISBN of the book.", "type": "string" },
    "numberOfPages": {
      "description": "The number of pages in the book.",
      "type": "integer"
    }
  }
}
```

## To do

- Hardcode the [identifiers schemas](https://schema.org/identifier) with [regular expressions](https://json-schema.org/understanding-json-schema/reference/regular_expressions.html)
- Hardcode the inferred property multiplicity after manually checking it

## Credits

Thanks to [geraintluff](https://github.com/geraintluff/schema-org-gen) for the property multiplicity and the hardcoded schemas (licensed under the [MIT License](https://opensource.org/licenses/MIT)).
