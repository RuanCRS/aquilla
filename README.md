## Aquilla

## Installation

```bash
$ npm i aquilla --save
```

```js
const aquilla = require('aquilla');
```

## Datas

```js
const jwtDatas = {
  secretKey: 'teste',
  timeInMinutes: 1,
  encryptedDatas: {
    userId: 1,
  },
};
```

## Results JWT

```js
const resultsJWT = aquilla.jwt(jwtDatas);
```

Install dependencies:

```bash
$ npm install
```

Start the server:

```bash
$ npm start
```

## License

[ISC](LICENSE)
