# Schema.org to JSON Schema

[![Build Status](https://travis-ci.org/charlestati/schema-org-json-schemas.svg?branch=master)](https://travis-ci.org/charlestati/schema-org-json-schemas)

**Generate JSON Schemas from Schema.org classes**

You can find the generated schemas in the [`schemas/` directory](schemas).

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
      "$ref": "CreativeWork.schema.json",
      "description": "The most generic kind of creative work, including books, movies, photographs, software programs, etc."
    }
  ],
  "properties": {
    "isbn": { "type": "string", "description": "The ISBN of the book." },
    "bookEdition": {
      "type": "string",
      "description": "The edition of the book."
    },
    "bookFormat": {
      "$ref": "BookFormatType.schema.json",
      "description": "The format of the book."
    },
    "illustrator": {
      "$ref": "Person.schema.json",
      "description": "The illustrator of the book."
    },
    "numberOfPages": {
      "type": "integer",
      "description": "The number of pages in the book."
    }
  }
}
```

## To do

- Hardcode the [identifiers schemas](https://schema.org/identifier) with [regular expressions](https://json-schema.org/understanding-json-schema/reference/regular_expressions.html)
- Hardcode the inferred property multiplicity after manually checking it

## Credits

Thanks to [geraintluff](https://github.com/geraintluff/schema-org-gen) for the property multiplicity and the hardcoded schemas (licensed under the [MIT License](https://opensource.org/licenses/MIT)).
