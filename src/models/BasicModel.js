import DBHelper from "@/helpers/DBHelper";

export default class BasicModel {
    tableName   = '';

    id          = null;
    modifed     = false;

    

    load(params){
        let attrObject = this.getAttributeList()
        for (let i in attrObject) {
            if (params[attrObject[i]]) {
                this[attrObject[i]] = params[attrObject[i]]
            }
        }
        return this
    }

    find(id, asObject = false){
        let records = (new DBHelper()).getItemFromString(this.tableName)
        if (records == false) {
            return asObject ? this : {}
        }
        for (let i in records) {
            if (records[i].id == id) {
                return asObject ? this.load(records[i]) : records[i]
            }
        }
        return asObject ? this : {}
    }

    findAll(asObject = false){
        let results = []
        let clonedObject;
        let records = (new DBHelper()).getItemFromString(this.tableName)

        if (records == false) {
            return []
        }
        if (asObject) {
            return records
        }
        for (let i in records) {
            clonedObject = Object.assign({}, this.load(records[i]));
            results.push( clonedObject )
        }
        return results
    }
    simplifyData(){
        let newRecord   = {}
        let attrObject  = this.getAttributeList()
        for (let i in attrObject) {
            newRecord[attrObject[i]] = this[attrObject[i]]
        }
        return newRecord
    }
    save() {
        this.modifed    = true

        let newRecord   = this.simplifyData()
        let records     = (new DBHelper()).getItemFromString(this.tableName)
        let reloadedRecords = []

        for (let i in records) {
            if (records[i].id != this.id) {
                reloadedRecords.push(records[i])
            } 
        }
        reloadedRecords.push(newRecord);
        (new DBHelper()).setItemToString(this.tableName, reloadedRecords);
    }

    getAttributeList(){
        return Object.getOwnPropertyNames(this)
    }
}