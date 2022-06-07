console.log('***** Music Collection *****')

let collection=[]; //creation of new array

function addToCollection ( title, artist, yearPublished ){
    const newObject = {}    
        newObject.title = title;
        newObject.artist = artist;
        newObject.yearPublished = yearPublished; 
    collection.push( newObject )
    return console.log( newObject );
} //end of function to create new objects with properties (title, artist, yearPublished) and add objects to collection array

addToCollection( 'Rio', 'Perota Chingo', 2020 );
addToCollection( 'Amor eterno', 'Juan Gabriel', 2020 );
addToCollection( 'Abrazame', 'Juan Gabriel', 1990 ); 
addToCollection( 'Melones', 'Perota Chingo', 1990 );
addToCollection( 'Melones', 'Lizzo', 2019 );
addToCollection( 'Mañana', 'Juanes', 2006 ); 
// testing function and logging all new objects

console.log( 'The collection array is now:', collection );// logging the updated collection array


function showCollection ( anyArray ){
    console.log( 'The number of this array is:', anyArray.length );
    for( let i=0; i<anyArray.length; i++ ){
        console.log( `${anyArray[i].title} by ${anyArray[i].artist}, published in ${anyArray[i].yearPublished}` )
    }return anyArray
    }//function to log each object in the collection array

showCollection(collection);// testing showCollection function

function findByArtist ( artist ){
    let newArray=[];
    for( i=0; i<collection.length; i++ ){
    if( collection[i].artist === artist ){
        newArray.push( collection[i] )
    }
    }return console.log( newArray )
}// function searching by artist

findByArtist( 'Lizzo' );
findByArtist( 'Juan Gabriel' );
findByArtist( 'Shakira' );//testing different artists
