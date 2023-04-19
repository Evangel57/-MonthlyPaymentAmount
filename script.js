window.addEventListener("load", main);


function main() {

  btn.addEventListener("click", () =>  {
    let result = document.getElementById("result");
    let term = document.getElementById("term").value;
    term = parseFloat(term);

    let interestRate = document.getElementById("interestRate").value;
    interestRate = parseFloat(interestRate);

    let sum = document.getElementById("sum").value;
    sum = parseFloat(sum);

    let count = sum/term*interestRate/100 + sum/term;


    result.innerHTML = count;
  })
}
