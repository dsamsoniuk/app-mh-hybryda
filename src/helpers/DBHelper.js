/**
 * Lokalny pomocnik do zapisu danych lokalnie
 */
export default class DBHelper {
  
    index = 'db_'

    setDataByTable(name, value){
      localStorage.setItem(this.index + name, JSON.stringify(value))
    }

    getDataByTable(name){
      return localStorage[this.index + name] ? JSON.parse(localStorage[this.index + name]) : false;
    }
}