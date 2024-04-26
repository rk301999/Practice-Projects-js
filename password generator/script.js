const password = document.querySelector("#password");
const message = document.querySelector(".message");
const btn = document.querySelector(".container button");
btn.addEventListener("click",()=>{
    length = 16;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbols = "!@#$%^&*(){[:;]}"
    const allCombined = upperCase + lowerCase + number + symbols;
    let generatedPassword = "";
    for(let i=0;i<length;i++){
        generatedPassword += allCombined[Math.round(Math.random() * allCombined.length)]
        console.log(generatedPassword);
    }
    password.value = generatedPassword;
})

const img = document.querySelector(".display img")
img.addEventListener("click",async()=>{
    password.select();
    await navigator.clipboard.writeText(password.value)
    .then(()=>{
        // alert("copied to clipboard");
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
        password.value = "";
    })
    .catch((e)=>console.log(e))
})
