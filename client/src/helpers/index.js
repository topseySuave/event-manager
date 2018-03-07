export default class Helpers{
    equals (val1, val2){
        return val1 === val2;
    }

    sanitizeString(str){
        // str.replace(/\s+/g, '-').toLowerCase();
        return str.toLowerCase().replace(/[\. ,:-]+/g, "-");
    }
}