//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
const calculateSum = (num1,num2)=>{
    const sum = num1 + num2;
    return sum;
};
console.log(calculateSum(5,2)); // 7


//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
const isEven = (num)=>{
    return (num % 2 === 0);
};
console.log(isEven(2));


//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
const findMax = (arrOfNum)=>{
    return Math.max(...arrOfNum);
};
console.log(findMax([0,9,2,5,39]));


//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
const reverseString = (name)=>{
    const reversedStr = [...name].reverse().join('');
    return reversedStr
};
console.log(reverseString("asad"));


//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
const filterOddNumbers = (arrOfNum)=>{
    const arrOfOddNum =  arrOfNum.filter((item)=>{
        return item % 2 !== 0;
    });
    return arrOfOddNum;
};
console.log(filterOddNumbers([2,3,6,7,13,19]));

//6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
const sumArray = (arrOfNum)=>{
    const sumOfAllNum = arrOfNum.reduce((sum , item)=>{
        return sum += item;
    });
    return sumOfAllNum ;
};
console.log(sumArray([2,2,1,5]));

//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
const sortArray = (arrOfNum)=>{
    return [...arrOfNum].sort((a,b)=>a-b);
};
console.log(sortArray([9,35,2,9,0,29,1]));


//8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
const capitalizeFirstLetter = (demoString)=>{
    return demoString.charAt(0).toUpperCase() + demoString.slice(1);
};
console.log(capitalizeFirstLetter("sumon"));

