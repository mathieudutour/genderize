# Genderize

Determine the pronoun to use for a first name.

## Installation

```bash
npm install genderize2
```

_Note: the `genderize` package returns invalid data, be sure to use `genderize2` instead_

## Usage

```js
const genderize = require('genderize2')

genderize('Peter', (err, pronoun) => {
  if (err) {
    // do something
  }

  // use the pronoun
})

// or use the sync API
const pronoun = genderize.sync('Peter')

// also works with a list of first names
genderize.list(['Peter', 'Anna'], (err, pronouns) => {
  if (err) {
    // do something
  }

  // use the pronouns
})
```

## License

MIT
