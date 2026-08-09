# @geomelon/spain

City, region, and country data for **Spain** — 19423 cities across 17 regions, with names translated into 50 languages, sourced from Wikidata.

## Install

```bash
npm install @geomelon/spain
```

## Usage

```js
const spain = require('@geomelon/spain')

spain.cities({ name: '<your search prefix>' })   // matches the primary name or any translation
spain.cities({ minPopulation: 1000000 })
spain.city('Q1492')                              // by Geomelon id or Wikidata id
spain.regions({ name: '<your search prefix>' })
spain.country                                    // country-level fields
spain.meta                                       // generatedAt, recordCount, license, source
```

## Filters

`cities(filter?)`:
| field | type | matches |
|---|---|---|
| `name` | `string` | case-insensitive prefix match against the primary name and every translation |
| `regionId` | `string` | exact match |
| `minPopulation` / `maxPopulation` | `number` | inclusive range |
| `language` | `string` | city has a translation in this language |
| `settlementType` | `string` | exact match against one of the city's settlement types |
| `limit` | `number` | caps the result count |

`regions(filter?)` supports `name` and `limit`.

## Languages

Names are translated into: Afrikaans (`af`), Albanian (`sq`), Arabic (`ar`), Armenian (`hy`), Azerbaijani (`az`), Bangla (`bn`), Basque (`eu`), Bokmål (`nb`), Bulgarian (`bg`), Catalan (`ca`), Chinese (`zh`), Croatian (`hr`), Czech (`cs`), Danish (`da`), Dutch (`nl`), English (`en`), Estonian (`et`), Finnish (`fi`), French (`fr`), Galician (`gl`), Georgian (`ka`), German (`de`), Hebrew (`he`), Hindi (`hi`), Hungarian (`hu`), Indonesian (`id`), Italian (`it`), Japanese (`ja`), Kazakh (`kk`), Korean (`ko`), Latvian (`lv`), Lithuanian (`lt`), Malay (`ms`), Modern Greek (`el`), Mongolian (`mn`), Persian (`fa`), Polish (`pl`), Portuguese (`pt`), Romanian (`ro`), Russian (`ru`), Serbian (`sr`), Slovak (`sk`), Slovene (`sl`), Spanish (`es`), Swedish (`sv`), Thai (`th`), Turkish (`tr`), Ukrainian (`uk`), Uzbek (`uz`), Vietnamese (`vi`).

Coverage is capped to the 50 languages above — a widely-spoken top-50 set plus Spain's own official language(s) — to keep package size reasonable. The full long tail of rarer Wikidata-only translations isn't included.

The raw JSON is still available directly if you'd rather roll your own queries:
```js
const data = require('@geomelon/spain/data.json')
```

## License

The data (`data.json`) is dedicated to the public domain under [CC0 1.0](./LICENSE) — free to use, no attribution required. The loader code (`index.js`/`index.d.ts`) is MIT-licensed. See [ATTRIBUTION.md](./ATTRIBUTION.md) for the data's (optional) credit line.

## Source

Generated from [geomelon.dev](https://geomelon.dev) — an API and dataset built on [Wikidata](https://www.wikidata.org). See the full live API on [RapidAPI](https://rapidapi.com/hom3chuk/api/geomelon).
