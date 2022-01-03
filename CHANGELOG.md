## [2.1.3](https://github.com/charlestati/schema-org-json-schema/compare/v2.1.2...v2.1.3) (2022-01-03)


### Bug Fixes

* use circleci status badge ([aa98336](https://github.com/charlestati/schema-org-json-schema/commit/aa983367329fdad6b24ffc4552168800f9e2f932))

## [2.1.2](https://github.com/charlestati/schema-org-json-schema/compare/v2.1.1...v2.1.2) (2022-01-03)


### Bug Fixes

* add .npmrc file ([b414d92](https://github.com/charlestati/schema-org-json-schema/commit/b414d9282fd20bbf4325cc7a4a4511d3ce34801f))

## [2.1.1](https://github.com/charlestati/schema-org-json-schema/compare/v2.1.0...v2.1.1) (2022-01-03)


### Bug Fixes

* avoid silent release fail ([2820a42](https://github.com/charlestati/schema-org-json-schema/commit/2820a425f4b17b5be7bff284a32706106d627927))

# [2.1.0](https://github.com/charlestati/schema-org-json-schema/compare/v2.0.0...v2.1.0) (2022-01-03)


### Bug Fixes

* use ci env variable instead of disabling husky ([26781c9](https://github.com/charlestati/schema-org-json-schema/commit/26781c9ec216c511d663979c9cba2db392b28324))


### Features

* add github release in semantic-release config file ([4acd318](https://github.com/charlestati/schema-org-json-schema/commit/4acd318806b1ac84997c8878c26b8d217c3cf68d))

# [2.0.0](https://github.com/charlestati/schema-org-json-schema/compare/v1.4.2...v2.0.0) (2022-01-03)


### Bug Fixes

* circleci config ([32ef0a1](https://github.com/charlestati/schema-org-json-schema/commit/32ef0a1f3bf5040cb61841765bc7b4b8ec2789b7))
* circleci node version ([2424cfe](https://github.com/charlestati/schema-org-json-schema/commit/2424cfeceedf48bfb2f3bb67f9f75493b35efb39))
* circleci node version ([47bde29](https://github.com/charlestati/schema-org-json-schema/commit/47bde29bae9e987e51f41fac6bd7f83ecb602976))
* schema url 404 ([e8b1f2c](https://github.com/charlestati/schema-org-json-schema/commit/e8b1f2cc6ffa01721896e87736f87654885d1475)), closes [#18](https://github.com/charlestati/schema-org-json-schema/issues/18)
* skip hooks in ci ([aa1eb6f](https://github.com/charlestati/schema-org-json-schema/commit/aa1eb6f0b64bab8f7b2f3703fb47941387bf5fe4))


### BREAKING CHANGES

* Use most recent JSON schema draft version (2020-12)

## [1.4.2](https://github.com/charlestati/schema-org-json-schema/compare/v1.4.1...v1.4.2) (2020-05-28)


### Bug Fixes

* Changed enum type to string ([ccfd786](https://github.com/charlestati/schema-org-json-schema/commit/ccfd7867a8f0a96f421a90bfd617be8735463a02))
* Removed custom `format` for compatibility with validators ([804d529](https://github.com/charlestati/schema-org-json-schema/commit/804d52988c59583ea5a0208a0ccfa22b31c01f43))
* Removed custom `format` in hardcoded schemas ([a130ffc](https://github.com/charlestati/schema-org-json-schema/commit/a130ffcce9e85373dea613894f00d76d0dfaa9e1))
* Removed obsolete snapshots ([8f0bfcf](https://github.com/charlestati/schema-org-json-schema/commit/8f0bfcfd97846122e56b38e3815f915696e9da11))
* Use the correct ID in `$ref` ([9f4aa4f](https://github.com/charlestati/schema-org-json-schema/commit/9f4aa4feafda1370cd94ae4c2a70a86f1eb23fcb))

## [1.4.1](https://github.com/charlestati/schema-org-json-schema/compare/v1.4.0...v1.4.1) (2020-05-22)


### Bug Fixes

* Allowed any `@type` value on the root schema ([e24049d](https://github.com/charlestati/schema-org-json-schema/commit/e24049d24a7bd3b639876aa7f9a9da997ce29114))

# [1.4.0](https://github.com/charlestati/schema-org-json-schema/compare/v1.3.0...v1.4.0) (2020-05-22)


### Features

* Added required `@type` property ([cf09e56](https://github.com/charlestati/schema-org-json-schema/commit/cf09e5607a380dfe3692839d5ca86c0dd9bd6e0c))
* Added support for single values in addition to arrays ([dcbb428](https://github.com/charlestati/schema-org-json-schema/commit/dcbb428317ce07ab8dcff50247c907f15443fb2f))
* sort parents and property types ([d93f16a](https://github.com/charlestati/schema-org-json-schema/commit/d93f16a26bf98d23eb806d03ccce08d7cf15b99a))

# [1.3.0](https://github.com/charlestati/schema-org-json-schema/compare/v1.2.0...v1.3.0) (2020-05-19)


### Features

* sort properties to avoid confusing diff ([cadd369](https://github.com/charlestati/schema-org-json-schema/commit/cadd3691264c91598c783327c7e2e9823e41023a))

# [1.2.0](https://github.com/charlestati/schema-org-json-schema/compare/v1.1.1...v1.2.0) (2020-05-13)


### Bug Fixes

* use anyOf instead of oneOf keyword for array items' type ([3b9f5eb](https://github.com/charlestati/schema-org-json-schema/commit/3b9f5eb6c2fa9a07a29aac6eb200a680ae3c385c))


### Features

* do not add multiplicity when type is boolean ([bff9801](https://github.com/charlestati/schema-org-json-schema/commit/bff980152b9479eca4d09d407e6df5567a3ebe2e))

## [1.1.1](https://github.com/charlestati/schema-org-json-schema/compare/v1.1.0...v1.1.1) (2020-05-12)


### Bug Fixes

* use native data types properly ([b2e53fc](https://github.com/charlestati/schema-org-json-schema/commit/b2e53fc058740940d51ae80a92d53c99f0b57ab0))

# [1.1.0](https://github.com/charlestati/schema-org-json-schema/compare/v1.0.0...v1.1.0) (2020-05-11)


### Features

* hardcode quantities ([8367073](https://github.com/charlestati/schema-org-json-schema/commit/836707371bd5157a43e93dd1653717a7f932db13))

# 1.0.0 (2020-05-02)


### Features

* initial release ([cc67982](https://github.com/charlestati/schema-org-json-schema/commit/cc67982473b79741fc4eca0f1e0cccd3c74a7a29))
