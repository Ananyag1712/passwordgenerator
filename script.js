function generatePassword(){

    const length = document.getElementById("length").value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";

    let password = "";
    for(let i = 0; i< length; i++){
        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
}