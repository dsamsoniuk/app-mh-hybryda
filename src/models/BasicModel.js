import DBHelper from "@/helpers/DBHelper";

export default class BasicModel {
    tableName   = '';
    id          = null;

    flagModifed = false;
    flagDeleted = false;
    flagNew     = false;
    /**
     * Załaduj dane w formie json-a do modelu
     * @param {object} params 
     * @returns 
     */
    load(params){
        let attrObject = this.getAttributeList()
        for (let i in attrObject) {
            if (params[attrObject[i]]) {
                this[attrObject[i]] = params[attrObject[i]]
            }
        }
        return this
    }
    /**
     * Znajdz model wg ID w formie objectu lub 
     * @param {*} id 
     * @param {*} asObject 
     * @returns 
     */
    find(id){
        let records = (new DBHelper()).getDataByTable(this.tableName)
        if (records == false) {
            return this
        }
        for (let i in records) {
            if (records[i].id == id) {
                return this.load(records[i])
            }
        }
        return this
    }
    /**
     * Pobierz wyszstkie wpisy wg modelu w formie objektow lub prostych danych json
     * @param {boolean} asObject 
     * @returns 
     */
    findAll(asObject = false){
        // let results = []
        // let clonedObject, clonedModel;
        let records = (new DBHelper()).getDataByTable(this.tableName)
        if (records == false) {
            return []
        }
        if (asObject === false) {
            return records
        }
        return records

        // for (let i in records) {
        //     clonedModel = Object.assign({}, this);
        //     clonedObject = Object.assign({}, clonedModel.load(records[i]));
        //     results.push( clonedObject )
        // }
        // return results
    }
    /**
     * Zwroc dane modelu w prostej formie json-a
     * @returns array
     */
    simplifyData(){
        let newRecord   = {}
        let attrObject  = this.getAttributeList()
        for (let i in attrObject) {
            newRecord[attrObject[i]] = this[attrObject[i]]
        }
        return newRecord
    }
    /**
     * Zapisz wszystkie zmiany do lokalnej bazy
     */
    save() {
        this.flagModifed = true

        let newRecord   = this.simplifyData()
        let records     = (new DBHelper()).getDataByTable(this.tableName)
        let reloadedRecords = []

        for (let i in records) {
            if (records[i].id != this.id) {
                reloadedRecords.push(records[i])
            } 
        }
        reloadedRecords.push(newRecord);
        (new DBHelper()).setDataByTable(this.tableName, reloadedRecords);
    }
    delete(){
        this.flagDeleted = true
        this.save() // TODO cos nie działa
        return true;
    }
    /**
     * Zwroc prosta liste atrybutow w modelu
     * @returns json
     */
    getAttributeList(){
        return Object.getOwnPropertyNames(this)
    }
    getBasicAttributes(){
        // TODO: tylko zwroc podstawowe atrybuty
        // let attributes = this.getAttributeList()

    }
}