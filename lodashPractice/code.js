const movies = require('./data.json');
const _ = require('lodash');

console.log('------ movies[0]', movies[0]);
const titles = _.map(movies, 'title');
console.log('---------------------', titles);

//Use a map method on a collection which is a combination of an array and object. 
//_.map(collection, iteratee)
const movie1 = movies[0];
//Give the collection's values but those. 
const stuff = _.omit(movie1, ['title', 'year', 'genres']);
console.log('--------------stuff', stuff);
//_.get gets a defautl value from a collection.
const c = _.get(stuff, '{afkd;adjkak|', 0);
//removeDuplicates
function removeDuplicates(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i + 1] || arr[i + 2] === arr[i + 1] || arr[i] === arr[i + 2]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
const arr1 = [1, 1, 2, 443];
const arr2 = removeDuplicates(arr1);

console.log('---------------------------arr2',arr2);
//The union method removes all duplicates.
const noDupes = _.union(arr1);
console.log('====================', arr1);
//Returns duplicate values betweem two arrays.
const intersection = _.intersection(arr1, arr2);
console.log('---------------intersection', intersection);

//Narrow down batch of data.
const moviesWithYearAndTitle = _.map(movies, e => {
    return {
        title: e.title,
        year: e.year,
    };
});
const moviesWithActorAndRating = _.map(movies, e => {
    return {
        actor: e.
    }
})

//groupBy running each elem of a collection that iterates, role of collection etermined by iteratee.
const moviesByYear = _.groupBy(moviesWithYearAndTitle, 'year');
 console.log('------------------moviesByYear', moviesByYear);
