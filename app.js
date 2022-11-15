function linearEquation(c,f){
    let coeff = math.inv([c])
    return math.multiply(coeff,[f])
}

function linearEquations(c,f){
    let coeff = math.inv(c)
    return math.multiply(coeff,f)
}

console.log(linearEquations([[1,1,1],[2,4,2],[7,8,6]], [25,46,52]))

const calculator = Desmos.GraphingCalculator(document.getElementById('calculator'), {
    expressions:false
});
//   invalidation.then(() => calculator.destroy()); // clean up if we re-render this cell
  calculator.setExpression({latex: `f(x) = ${prompt('f(x) = ?')}`,color: Desmos.Colors.BLUE});
  calculator.setExpression({latex: `a=${prompt("Starting Value?")}`})
  calculator.setExpression({latex: `b=${prompt('Ending Value?')}`})
  calculator.setExpression({latex: `\\int_{a}^{b}f\\left(x\\right)dx`,color: Desmos.Colors.BLUE})
  calculator.setExpression({latex: `\\min\\left(0,f\\left(x\\right)\\right)\\le y\\le\\max\\left(0,f\\left(x\\right)\\right)\\left\\{a\\le x\\le b\\right\\}`,color: Desmos.Colors.BLUE})
  calculator.setExpression({latex: `x=b\\left\\{\\min\\left(0,f\\left(b\\right)\\right)\\le y\\le\\max\\left(0,f\\left(b\\right)\\right)\\right\\}`,color: Desmos.Colors.BLUE})
   calculator.setExpression({latex: `x=a\\left\\{\\min\\left(0,f\\left(a\\right)\\right)\\le y\\le\\max\\left(0,f\\left(a\\right)\\right)\\right\\}`,color: Desmos.Colors.BLUE})
  // calculator.setExpression({latex: `b=2`})
// calculator.getState().expressions.list[4].observe('numericValue', function() {
//     alert(a.numericValue);
//   });
  
  
  
  calculator.setMathBounds({ left: -45, right: 45, bottom: -45, top: 45 });
//   return view;
