/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/

 // ++ YOUR CODE below
/*function sumDigits(number) {
  var total=0;
  var quantity=number.split("");
  for(i=0; i<quantity.length; i++) {
    var newDigit = quantity[i];
      total += quantity;
  }
}









 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-05');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return 6 from "123"');
console.assert(sumDigits(123) === 6)

console.log('Should return 11 from "911"');
console.assert(sumDigits(911) === 11)

console.log('Should return 12 from "8040"');
console.assert(sumDigits(8040) === 12)

console.log('Should return 15 from "173220"');
console.assert(sumDigits(173220) === 15)

console.log('\n')*/

/*var student = { 
  name: "John Doe",
  age: 21,
  girlfriend: true,
  children: ["JO", "Merengues", "x"] 
};


//acceder a la propiedad del objeto
//console.log(typeof student.name);/

//Access to properties
var age = student.age; //dot notation
var ageUsingBrackets = student["name"];

//console.log(ageUsingBrackets)
//lamar a todos los valores del objeto student console.log(student)
student["address"]="Reforma 222"; //agregar un nuevo elemento al objeto

//para eliminar la propiedad
delete student.girlfriend;
//Usos de los objetos, anidar objetos
student.address = {
  street: {
    name: "Paseo de la Reforma",
    number: {
      ext:7, 
      int:303
    }
  },
  city: "CDMX",
  country: "Mexico"
}
// para acceder al #int 
console.log(typeof student.address.street.number.int) //preguntar propiedad


//Secreto:tener elementos de un array dentro de un objeto*/

/*var movie = {
  title: "the shining",
  year: 1980,
  director: "stanley kubrick",
};

var movie1 = {
  title: "apocalypse",
  year: 1979,
  director: "Francis"
};

var movie2 = {
  title: "star wars",
  year: 1979,
  director="lucas"
};*/

var movies = [{ //vuelta 1
  title: "the shining",
  year: 1980, 
  director: "stanley kubrick",
}, {
  title: "apocalypse",//vuelta 2
  year: 1979,
  director: "Francis"
}, {
  title: "star wars",
  year: 1979,
  director: "george lucas"
}, {
  title: "titanic",
  year: 1998,
  director: "james Ch",
  address: {
    street:12,
    name: "Lost"
  }
}];

//para llamarlo, se hace lo siguiente
function onlyDirectors(movies) {
  var directors=[];

for(var position = 0; position < movies.length; position++) {
  var movie = movies[position];

 
  var firstName = movie.director.split(" ")[0];

  directors.push(firstName);
}
return directors;
}
