const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const password = document.getElementById('generated-password');

let newpassword = "";

function generatePassword() {
    newpassword = ""
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    for (let i = 0; i < 16; i++) {
        newpassword += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    password.innerHTML = newpassword;
    return newpassword;
}

password.innerHTML = generatePassword()

generateBtn.addEventListener('click', () => {
    generatePassword();
})

console.log(copyBtn)

copyBtn.addEventListener('click', () => {
    window.navigator.clipboard.writeText(password.innerHTML);
})