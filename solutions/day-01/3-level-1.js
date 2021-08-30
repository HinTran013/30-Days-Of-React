//1
const emptyArray = [];
//2
const array5 = [1,2,3,4,5];
//3
console.log('length of empty array:', emptyArray.length);
console.log('length of array 5:', array5.length);
//4
//first item
console.log('first item:', array5[0]);
//middle item
console.log('middle item:', array5[Math.floor(array5.length / 2)]);
//last item
console.log('last item:', array5[array5.length - 1]);
//5
const mixedDataTypes = [
    'this a string',
    123,
    2.32,
    NaN,
    {
        myName: 'Hien',
        age: 20
    },
    null
]

console.log('length of the mixed data types array:', mixedDataTypes.length);
//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//7
console.log('IT companies:',itCompanies)
//8
console.log('number of IT companies in array:', itCompanies.length);
//9
console.log('first company:', itCompanies[0]);
console.log('middle company:', itCompanies[Math.floor(itCompanies.length / 2)]);
console.log('last company:', itCompanies[itCompanies.length - 1]);
//10
console.log(itCompanies.join(' - '));
//11
console.log(itCompanies.join(' - ').toUpperCase());
//12
console.log(itCompanies.slice(0, 6).join(', ') + ' and ' + itCompanies[itCompanies.length - 1] + ' are big IT companies');
//13
if(itCompanies.includes('Facebook'))
    console.log('Facebook is the one of the biggest IT companies');
else
    console.log('Facebook is not found');
//14
var moreThanOneO = itCompanies.filter(function(element, index){
    return element.split('o').length > 2;
});
console.log('Companies which have more than one "o" in their name: ' + moreThanOneO.toString());
//15
console.log('IT companies array after sorted: ' + itCompanies.sort());
//16
console.log('reverse: ' + itCompanies.sort().reverse());
//17
console.log('slice out the first three companies: ' + itCompanies.slice(0, 3));
//18
console.log('slice out the last three companies: ' + itCompanies.slice(4, itCompanies.length));
//19
console.log('first company is removed: ' + itCompanies.shift());
console.log('after remove first company:' + itCompanies);
//20
console.log('middle company is removed: ' + itCompanies.splice(Math.floor(itCompanies.length / 2),1));
console.log('after remove middle company:' + itCompanies);
//21
console.log('last company is removed: ' + itCompanies.pop());
console.log('after remove last company:' + itCompanies);
//
itCompanies.splice(0);
console.log(itCompanies)