let FirstMonth = prompt('Enter first month salary','1');
let SecondMonth = prompt('Enter second month salary','2');
let result = Number(FirstMonth) + Number(SecondMonth);
alert(`Your salary is two month:${result}$`)
alert(`You have extra bonus!Your total salary was:${result}$ It's increase for 1$ and now it is: ${result +1} $`)
if (result < 1999)
    alert('I\'m out')
else
    alert('I\'m ready to work')