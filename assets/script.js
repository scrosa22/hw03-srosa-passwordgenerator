// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtn2;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var userChoices;


// input options
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

// converts letters to uppercase 
var toUpper = function (i) {
    return i.toUpperCase();
};
// alphabet uppercase 
alphabetUpper = alphabet.map(toUpper);
// alphabetUpper = alphabet.toUpperCase


generateBtn.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    // prompt for info 
    generateBtn2 = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    
    if (!generateBtn2) {
        alert("invalid option. try again!");
    } else if (generateBtn2 < 8 || generateBtn2 > 128) {    
        generateBtn2 = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmNumber = confirm("Will this contain numbers? 'Ok' for Yes, 'Cancel' for No");
        confirmCharacter = confirm("Will this contain special characters? 'Ok' for Yes, 'Cancel' for No");
        confirmUppercase = confirm("Will this contain Uppercase letters? 'Ok' for Yes, 'Cancel' for No");
        confirmLowercase = confirm("Will this contain Lowercase letters? 'Ok' for Yes, 'Cancel' for No");
        // update confirm twice?
    };

    // else if no all options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        userChoices = alert("you must select the proper criteria. try again!");
    }

    // else if for all options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        userChoices = character.concat(number, alphabet, alphabetUpper);
    }

    // else if for 3 options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        userChoices = character.concat(number, alphabetUpper);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        userChoices = character.concat(number, alphabetUpper);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        userChoices = character.concat(alphabet, alphabetUpper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        userChoices = number.concat(alphabet, alphabetUpper);
    }


    // Else if for 2 options 
    else if (confirmCharacter && confirmNumber) {
        userChoices = character.concat(number);
    } else if (confirmCharacter && confirmLowercase) {
        userChoices = character.concat(alphabet);
    } else if (confirmCharacter && confirmUppercase) {
        userChoices = character.concat(alphabetUpper);
    } else if (confirmLowercase && confirmNumber) {
        userChoices = alpha.concat(number);
    } else if (confirmLowercase && confirmUppercase) {
        userChoices = alpha.concat(alphabetUpper);
    } else if (confirmNumber && confirmUppercase) {
        userChoices = number.concat(alphabetUpper);
    }


    // Else if for 1 option
    else if (confirmCharacter) {
        userChoices = character;
    }
    else if (confirmNumber) {
        userChoices = number;
    }
    else if (confirmLowercase) {
        userChoices = alphabet;
    }
    // space efor upper conversion
    else if (confirmUppercase) {
        userChoices = space.concat(alphabetUpper);
    };



//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
    // passwordText.value = password;

    var password2 = [];

    for (var i = 0; i < generateBtn2; i++) {
        var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        password2.push(pickChoices);
    }

    var password = password2.join("");
    passwordText(password);
    console.log(`${password}`)
    return password;

    // document.getElementById("password").textContent = password;
}

function passwordText(password) {
    document.getElementById("password").textContent = password;

}



