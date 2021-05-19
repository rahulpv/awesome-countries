# Awesome Countries

Awesome countries is a js library for dealing with countries information.

## Installation


```bash
npm install awesome-countries --save
```

## Usage

```node
const awesomeCountries = require('awesome-countries')

//functions with params
//capFirst: returns with first letter as capital
//toUpperCase: returns text as capital

let data = awesomeCountries.getAllCountryNames("capFirst")
let data = awesomeCountries.getAllCurrency("capFirst")
let data = awesomeCountries.getAllISO("toUpperCase")
let data = awesomeCountries.getAllISOAlpha3("toUpperCase")
let data = awesomeCountries.getAllTLD("toUpperCase")

//Optional data
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

let data = awesomeCountries.getAllPhoneCode()
let data = awesomeCountries.getAllFlags()

//Filter for single country
let data = awesomeCountries.getCountryByName("india")
let data = awesomeCountries.getCountryByPhoneCode("+1")
let data = awesomeCountries.getCountryByISO("US")
let data = awesomeCountries.getPhoneCodeByCountry("united states of america")
let data = awesomeCountries.getPhoneCodeByCountryISO("US")
let data = awesomeCountries.getFlagByCountryISO("in")

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)