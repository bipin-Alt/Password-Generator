const generateBtn = document.querySelector(".generate-btn");
const wordPick = ["A", "b", "c", "D", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "P","q", "r", "s", "t", "u", "v", "w", "x", "Y", "z", "a", "B", "C", "d", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "O", "p", "Q", "R", "S", "T", "U","V", "W", "X", "y", "Z", "!", "@", "#", "$","&",";","<",">",".","1","2","3","4","5","6","7","8","9"];
const outputPassword = document.querySelector(".output-pass");

//function to generate random passwords//
const passwordGenerator = () =>{
    let password = "";
    for(let i = 0; i < 10; i++){
        let randomIndex = Math.floor(Math.random() * wordPick.length);
        password += wordPick[randomIndex];

    }
    outputPassword.textContent = password;
    return password;
}

//event listener for button click//

generateBtn.addEventListener("click", passwordGenerator);
