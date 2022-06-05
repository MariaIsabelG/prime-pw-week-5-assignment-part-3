console.log('***** Music Collection *****')

let collection=[]; //creation of new array

function addToCollection ( title, artist, yearPublished ){
    const newObject = {}    
        newObject.title = title;
        newObject.artist = artist;
        newObject.yearPublished = yearPublished; 
        collection.push(newObject)
    return newObject
} //end of function to create new objects with properties (title, artist, yearPublished) and add objects to collection array

const collection1 = addToCollection( 'Rio', 'Perota Chingo', 2020 );
console.log( 'Our first collection is:' );

const collecion2 = addToCollection( 'Amor eterno', 'Juan Gabriel', 2020 );
console.log( 'Our second collection is:', collecion2 );

const collection3 = addToCollection( 'Abrazame', 'Juan Gabriel', 1990 ); 
console.log( 'Our third collection is:', collection3 );

const collection4 = addToCollection('Melones', 'Perota Chingo', 1990);
console.log( 'Our fourth collections is:', collection4 );

const collection5 = addToCollection('Melones', 'Lizzo', 2019);
console.log( 'Our fifth collection is:', collection5 );

const collection6 = addToCollection( 'Mañana', 'Juanes', 2006); 
console.log( 'Our sixth collection is:', collection6 );// testing function and logging all new objects

console.log('The collection array is now:', collection);// logging the updated collection array








//- Create a variable `collection` that starts as an empty array.

//- Add a function named `addToCollection`. This function should:
//  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//  - Create a new object having the above properties
//  - Add the new object to the end of the `collection` array
//  - Return the newly created object

//- Test the `addToCollection` function:
//  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//  - Console.log each album as added using the returned value.
//  - After all are added, console.log the `collection` array.

//- Add a function named `showCollection`. This function should:
//  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
 // - Console.log the number of items in the array.
 // - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

//- Test the `showCollection` function.

//- Add a function named `findByArtist`. This function should:
//  - Take in `artist` (a string) parameter
//  - Create an array to hold any results, empty to start
//  - Loop through the `collection` and add any objects with a matching artist to the array.
//  - Return the array with the matching results. If no results are found, return an empty array.

//- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

//> When testing your functions, write all tests in the JavaScript file!