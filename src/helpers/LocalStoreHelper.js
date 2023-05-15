export default class LocalStoreHelper {

    setItemToString(name, value){
      localStorage.setItem(name, JSON.stringify(value))
    }

    getItemFromString(name){
      return localStorage[name] ? JSON.parse(localStorage[name]) : false;
    }
}