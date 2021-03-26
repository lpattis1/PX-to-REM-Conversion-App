// button variables:
let convertBtn = document.getElementById("btn--convert");
let resetBtn = document.getElementById("btn--reset");
let swapBtnRem = document.getElementById("rem-swap");
let swapBtnPx = document.getElementById("px-swap");

// px to rem convert:
let pxToRem = convertBtn.addEventListener("click", function(){
    const base = document.getElementById("base").value;
    const pixel = document.getElementById("px").value;
    const conversion = (pixel / base);
    console.log(conversion);

    const rem = document.getElementById("rem").value = conversion;

    // -----

    
});

// reset form:
function resetData(){
    document.querySelector("form").reset();
}

