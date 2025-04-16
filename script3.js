function passwordGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 8) {
        return "Panjang kata sandi harus minimal 8.";
    }

    if (allowedChars.length === 0) {
        return "Pilih setidaknya satu jenis karakter.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLengthInput = document.getElementById("passwordLength");
const includeLowercaseCheckbox = document.getElementById("includeLowercase");
const includeUppercaseCheckbox = document.getElementById("includeUppercase");
const includeNumbersCheckbox = document.getElementById("includeNumbers");
const includeSymbolsCheckbox = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {
    const length = parseInt(passwordLengthInput.value);
    const includeLowercase = includeLowercaseCheckbox.checked;
    const includeUppercase = includeUppercaseCheckbox.checked;
    const includeNumbers = includeNumbersCheckbox.checked;
    const includeSymbols = includeSymbolsCheckbox.checked;

    const generatedPassword = passwordGenerator(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    passwordOutput.value = generatedPassword;
});

copyBtn.addEventListener("click", () => {
    passwordOutput.select();
    document.execCommand("copy");
    alert("Password berhasil disalin! Terimakasih Telah Menggunakan Password Generator by Rey");
});