# District Map
Tool to allow parents find child's assigned school based on address.
Utilizes Edlio API to call school information(Name, Address, Phone Number, Logo)

## Setup
1) Clone the repo
2) Run `npm install` to ensure all the needed dependancies are installed.

## Running
From terminal, run `node start` or `npm start`. Open browser to `localhost:5000`.

Using the tool is simple. Begin entering address into search bar and choose an autocomplete option. Choose grade level of child. Click `Check Location` and the results will be displayed beneath the address form.

## To Add Addresses/Schools
Boundaries use the following format:
```
{
    "low": Number, // The starting address number
    "high": Number, // The ending address number
    "dir": String, // Direction for the street (e.g. "North")
    "street": String, // Street name
    "oE": String, // Trailing Direction (e.g "W")
    "city": String, // City
    "zip": Number, // Zip Code
/* Edlio school code representing the school each grade in this address block is assigned to */
    "Transitional Kindergarten": Number,
    "k": Number,
    "1": Number,
    "2": Number,
    "3": Number,
    "4": Number,
    "5": Number,
    "6": Number,
    "7": Number,
    "8": Number,
    "9": Number,
    "10": Number,
    "11": Number,
    "12": Number
}
```

## TODO:
- Create DB for school information to be updated.
