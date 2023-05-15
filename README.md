# Aplikacja MH Hybryd

Aplikacja desktop - Vue 2 + Electron 13




## Biblioteki 
* https://bootstrap-vue.org/ - bootstrap 4


## Metody:

vue add router

### Tutoriale:

* https://vueschool.io/articles/vuejs-tutorials/how-to-use-vue-router-a-complete-tutorial/



Korzystałem z:

* nodejs 16
* npm 8.19

## Debug-owanie, czyli odpal lokalnie aplikacje oraz pokazuj bledy w konsoli
```
npm run electron:serve
``` 

## Stworz build dla systemu linux czyli gotowa aplikacje
```
npm run electron:build -- --linux
npm run electron:build -- --windows
```

## Windows jak uruchomic aplikacje
```
dist/win-unpacked/vue-desktop.exe
```

## Linux jak uruchomic aplikacje
```
./dist_electron/linux-unpacked/vue-desktop
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
