'use strict';
const data = require('./data/masterData.json');

module.exports.getAllCountryNames = function(type) {

    let countries = []
    data.filter(function(item){
        let country = type == "toUpperCase"? item.name.toUpperCase():  type == "capFirst"? item.name.charAt(0).toUpperCase() + item.name.slice(1) : item.name;
        countries.push(country)
    });
    return countries;
}

module.exports.getAllCurrency = function(type) {
    let currencies = []
    data.filter(function(item){
        let currency = type == "toUpperCase"? item.currency.toUpperCase():  type == "capFirst"? item.currency.charAt(0).toUpperCase() + item.currency.slice(1) : item.currency;
        currencies.push(currency)
    });
    return currencies;
}

module.exports.getAllISO= function(type) {
    let iso = []
    data.filter(function(item){

        let currency = type == "toUpperCase"? item.iso.alpha_2.toUpperCase():  type == "capFirst"? item.iso.alpha_2.charAt(0).toUpperCase() + item.iso.alpha_2.slice(1) : item.iso.alpha_2;
        iso.push(currency)
    });
    return iso;
}
module.exports.getAllISOAlpha3= function(type) {
    let isoAlpha = []
    data.filter(function(item){

        let currency = type == "toUpperCase"? item.iso.alpha_3.toUpperCase():  type == "capFirst"? item.iso.alpha_3.charAt(0).toUpperCase() + item.iso.alpha_3.slice(1) : item.iso.alpha_3;
        isoAlpha.push(currency)
    });
    return isoAlpha;
}
module.exports.getAllTLD= function(type) {
    let currencies = []
    data.filter(function(item){

        let currency = type == "toUpperCase"? item.tld.toUpperCase():  type == "capFirst"? item.tld.charAt(0).toUpperCase() + item.tld.slice(1) : item.tld;
        currencies.push(currency)
    });
    return currencies;
}
module.exports.getAllPhoneCode= function(type) {
    let phoneCodes = []
    data.filter(function(item){
        phoneCodes.push(item.phone_code)
    });
    return phoneCodes;
}
module.exports.getAllFlags= function(type) {
    let flags = []
    data.filter(function(item){
        flags.push(item.flag)
    });
    return flags;
}
module.exports.getAllCountries = function(json) {

    let countries = []
    data.filter(function(item){

        let country = {}
        if(json.name) country.name = item.name
        if(json.capital) country.capital = item.capital
        if(json.currency) country.currency = item.currency
        if(json.native_language) country.native_language = item.native_language
        if(json.famous_for) country.famous_for = item.famous_for
        if(json.phone_code) country.phone_code = item.phone_code
        if(json.flag) country.flag = item.flag
        if(json.drive_direction) country.drive_direction = item.drive_direction
        if(json.alcohol_prohibition) country.alcohol_prohibition = item.alcohol_prohibition
        if(json.area) country.area = item.area
        if(json.continent) country.continent = item.continent
        if(json.iso) country.iso = item.iso
        if(json.tld) country.tld = item.tld
        if(json.constitutional_form) country.constitutional_form = item.constitutional_form
        if(json.language_codes) country.language_codes = item.language_codes
        if(json.is_landlocked) country.is_landlocked = item.is_landlocked
        if(json.neighbors) country.neighbors = item.neighbors

        countries.push( country)
    });
    return countries;
}

module.exports.getCountryByName = function(value) {
    let country = {}
    data.filter(function(item){
        if(item.name == value || item.name.toUpperCase() == value)  country =  item;
    });
    return country;
}

module.exports.getCountryByPhoneCode = function(value) {
    let country = {}
    data.filter(function(item){
        if(item.phone_code == value)  country =  item;
    });
    return country;
}


module.exports.getCountryByISO = function(value) {
    let country = {}
    data.filter(function(item){
        if(item.iso.alpha_2 == value || item.iso.alpha_2.toUpperCase() == value)  country = item;
    });
    return country;
}

module.exports.getPhoneCodeByCountry = function(value) {
    let phoneCode = ""
    data.filter(function(item){
        if(item.name == value || item.name.toUpperCase() == value)  phoneCode =  item.phone_code;
    });
    return phoneCode;
}

module.exports.getPhoneCodeByCountryISO = function(value) {
    let phoneCode = ""
    data.filter(function(item){
        if(item.iso.alpha_2 == value || item.iso.alpha_2.toUpperCase() == value)  phoneCode =  item.phone_code;
    });
    return phoneCode;
}

module.exports.getFlagByCountryISO = function(value) {
    let flag = ""
    data.filter(function(item){
        if(item.iso.alpha_2 == value || item.iso.alpha_2.toUpperCase() == value)  flag =  item.flag;
    });
    return flag;
}
