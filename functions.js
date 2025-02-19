// uses == to check if same value
function isNum(num){
    for (x = 0; x<10; x++){
        if (num == x){
            return true;
        }
    }
    return false;
}

function checkPassword(pass1, pass2) {
    //check if strings are equal and has at least 8 char
        if (pass1 === pass2 && pass1.length >= 8){
            //check if string has a lower cased
            for (var x = 0; x < pass1.length; x++){
                if (pass1[x] == pass1[x].toLowerCase() && isNum(pass1[x]) === false){
                    break;
                }

                //if no lowercase yet and loop almost done, return false
                if (x+1 == pass1.length){
                    return false;
                }
            }

            //check if string has an upper case
            for (var x = 0; x < pass1.length; x++){
                if (pass1[x] == pass1[x].toUpperCase() && isNum(pass1[x]) === false){
                    break;
                }

                //if no uppercase yet and loop almost done, return false
                if (x+1 == pass1.length){
                    return false;
                }
            }

            //check if there is number
            for (var x = 0; x < pass1.length; x++){
                if (isNum(pass1[x]) === true){
                    break;
                }

                //if no ==number yet and loop almost done, return false
                if (x+1 == pass1.length){
                    return false;
                }
            }
            
            //if reached this point, means has upper and lower case and number
            return true;
        }
        //if false
        else {
            return false;
        }
}

//function for reversing a string
function reverse (pass) {
    var reversed = "";
    
    for (x = pass.length-1; x >= 0; x--){
        reversed = reversed + pass[x];
    }

    return reversed;
}

// FUNCTION 1 TEST CASES
console.log(checkPassword("helloword","hello"));
console.log(checkPassword("hello","hello"));
console.log(checkPassword("hello1234","hello1234"));
console.log(checkPassword("Hello1234","Hello1234"));
console.log(checkPassword("HELLO1234","HELLO1234"));

// FUNCTION 2 TEST CASE
console.log(reverse("hello"));