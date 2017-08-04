# dev/production webpack configuration example

## setup
```
npm i
```

## dev
### Settings
- served by webpack-dev-server
- source map
- no uglify

### Usage
1. start webpack-dev-server
```bash
npm run webpack:dev 
```
2. show src/dev.html

## production
### Settings
- build bundle.js
- no source map
- uglify

### Usage
1. build bundle.js
```bash
npm run webpack:prod 
```
2. show src/prod.html

## License
MIT
