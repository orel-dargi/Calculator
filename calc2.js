let n1, n2;

const inpList = document.querySelectorAll("input");
const btnList = document.querySelectorAll('button');

const resultOut = document.querySelector("#result");

const validate = () => { 

    let valid = false;

    if (!n1 && n1 !== 0 || !n2 && n2 !== 0) 
        resultOut.innerText = "should supply both numbers"
    else if (isNaN(Number(n1)) || isNaN(+n2))
        resultOut.innerText = "both input values should be numbers"
    else 
        valid = true;

    return valid;
}

const calc = (ev) => {

    console.log(`target: ${ev.target.outerHTML}`)

    if (validate() && ev.target.tagName === "BUTTON") {

        let result;
        n1 = +n1;
        n2 = +n2;

        switch(ev.target.id) {
            case "plus":
                result = n1 + n2;
                break;
            case "minus":
                result = n1 - n2;
                break;
            case "multiply":
                result = n1 * n2;
                break;
            case "divide":
                if ( n2 )
                    result = Math.round((n1 / n2) * 100 ) / 100;
                else
                    result = `It is FORBIDDEN: to divide by zero 🙄`;
                break;
            case "power":
                result = n1 ** n2;
                break;
            case "remainder":
                // t.b.d. ensure that these are the integers
                if ( n2 ) {
                    let rem = n1 % n2;
                    let res = (n1 - rem) / n2;
                    result = `${res} remainder ${rem}`;
                } else
                    result = `It is FORBIDDEN: to divide by zero 🙄`;
                break;
            default: 
                result = `Unknown operation ${operation}`;
        }

        resultOut.innerText = result;
    }

}

// btnList.forEach(btn => btn.addEventListener('click',(event) => { calc(event) }));
// 
//     the above line is equivalent to the below line:
btnList.forEach(btn => btn.addEventListener('click',calc ));

inpList.forEach(inp => inp.addEventListener('input',(e) => {

    if ( e.target.id === "num1" ) n1 = e.target.value
    else n2 = e.target.value;

}))

// MISSION 1: - Instead of separate buttons create the list of buttons
//             (querySelectorAll)

//            - Go over this list and add listener with "calc" function
//              to each button, like this:

//              btnPlus.addEventListener('click',() => { calc("plus") });

//              For the name of operation use id

// MISSION 2: - Add 1 or 2 operations to the calculator
//              For example, "power" and "remainder"
//
//              For this we need to add a button and an operation to "calc"

// MISSION 3: - create 2 global variables: n1 and n2
             
//            - create the list of the input elements

//            - go over this list, add listener for 'input' event
//              and use function to update the value of n1 or n2
//              (if id of the target element num1 - n1 should be
//               updated, otherwise, n2 should be updated)

//            - remove all the unnecessary assginments of input.value
//              from validate() and from calc()

// MISSION 4: - Use event propagation and instead the listeners on
//              every button make one listener on their father
//              DIV ".buttons"

document.querySelector('.buttons').addEventListener('click', calc);