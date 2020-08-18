const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const password = document.getElementById('generated-password');

let newPassword = "";

function generatePassword() {
    newPassword = ""
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    for (let i = 0; i < 16; i++) {
        newPassword += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    password.innerText = newPassword;
    return newPassword;
}

password.innerText = generatePassword()

generateBtn.addEventListener('click', () => {
    generatePassword();
})

copyBtn.addEventListener('click', () => {
    window.navigator.clipboard.writeText(password.innerText);
})