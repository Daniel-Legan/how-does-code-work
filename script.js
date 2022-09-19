console.log('in script.js');

let myAnniversary; //declaration
myAnniversary = '7/7/1955'; //assignment

console.log('my aniversary is', myAnniversary);

//evaluation
let month = 'june';
let date = '16';
let year = '2011';

myAnniversary = month + date + year; //'june' + '16' + '2011' = 'june162011'
myAnniversary = `
    your anniversary is on ${month} ${date}, ${year},
    we are using variable interpolation!
    we are in week ${3*2}
`;
console.log(myAnniversary);

let aniversaryDate = {
    month: 'june',
    date: '16',
    year: '2011'
}

console.log(aniversaryDate.month);

function isWordSilly(aWord) {
    let sillyWords = ['squeegee', 'barnacle', 'barbecue', 'quagmire', 'bog', 'loofah'];
  
    for (let oneSillyWord of sillyWords) {
      if (oneSillyWord === aWord) {
        return true;
      }
    }
    return false;
  }


/*
Within isWordSilly, a thing, 'aWord' is given. A array of sillyWords is defined within the function. 
The for loop iterated through the array of sillyWords one at a time.
If the string of sillyWords matches aWord, the function stops and returns true. 
If aWord is not found within sillyWords, the function returns false.
*/

console.log(isWordSilly('barbecue'));