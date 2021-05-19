const awesomeCountries = require('../lib/index.js')

//let data = awesomeCountries.getAllCountryNames("capFirst")
//let data = awesomeCountries.getAllCurrency("capFirst")
//let data = awesomeCountries.getAllISO("toUpperCase")
//let data = awesomeCountries.getAllISOAlpha3("toUpperCase")
//let data = awesomeCountries.getAllTLD("toUpperCase")
//let data = awesomeCountries.getAllPhoneCode()
//let data = awesomeCountries.getAllFlags()
let data = awesomeCountries.getAllCountries({
    "name": true,
    "capital": true,
    "currency": true,
    "native_language": false,
    "famous_for": false,
    "phone_code": true,
    "flag": true,
    "drive_direction": false,
    "alcohol_prohibition": false,
    "area": true,
    "continent": false,
    "iso":  true,
    "tld": true,
    "constitutional_form": false,
    "language_codes": false,
    "is_landlocked": false,
    "neighbors": false
})


//let data = awesomeCountries.getCountryByName("india")
//let data = awesomeCountries.getCountryByPhoneCode("+1")
//let data = awesomeCountries.getCountryByISO("US")
//let data = awesomeCountries.getPhoneCodeByCountry("united states of america")
//let data = awesomeCountries.getPhoneCodeByCountryISO("US")
//et data = awesomeCountries.getFlagByCountryISO("in")


console.log(data)