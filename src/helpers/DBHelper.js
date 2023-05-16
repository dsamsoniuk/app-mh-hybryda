/**
 * Lokalny pomocnik do zapisu danych lokalnie
 */
export default class DBHelper {
  
    index = 'db_'

    setItemToString(name, value){
      localStorage.setItem(this.index + name, JSON.stringify(value))
    }

    getItemFromString(name){
      return localStorage[this.index + name] ? JSON.parse(localStorage[this.index + name]) : false;
    }
}