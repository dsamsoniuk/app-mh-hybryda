
# Instalacja i uruchamianie


### Wymagane pakiety

* nodejs 16
* npm 8.19


## Install

```bash
// Instalacja node_modules
npm install
```

## Build 

### Stworz aplikacje

```bash
npm run electron:build -- --linux
// uruchamiamy:  ./dist_electron/linux-unpacked/vue-desktop

npm run electron:build -- --windows
// uruchamiamy:  dist/win-unpacked/vue-desktop.exe
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
