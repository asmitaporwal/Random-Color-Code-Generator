var bgBody = document.getElementById('main');

function copyCode() {
    let copyText = document.getElementById('code').textContent;
    navigator.clipboard.writeText(copyText);
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.textContent = 'Copied';
    setTimeout(() => { copyBtn.textContent = 'Copy' }, 3000);
}
//hex color code generator function
function hexColorCodeGenerator() {
    let symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let bgColor = "#";
    for (let i = 0; i < 6; i++) {
        // bgColor=bgColor+ symbols[Math.floor(Math.random()*16)];
        bgColor += symbols[Math.floor(Math.random() * 16)];
    }
    bgBody.style.backgroundColor = bgColor;
    console.log(bgColor);
    document.getElementById('codeBox').style.display = 'block';
    document.getElementById('code').textContent = bgColor;
}

//rgb color code generator function - range:0 to 255 ,rgb(215,42,145)
function rgbColorCodeGenerator() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let bgColor = `rgb(${red}, ${green}, ${blue})`;
    bgBody.style.backgroundColor = bgColor;
    console.log(bgColor);
    document.getElementById('codeBox').style.display = 'block';
    document.getElementById('code').textContent = bgColor;

}

//rgba color code generator function- range:0 to 255,alpha - 0 to 1 ,rgba(215,42,145,0.5)
function rgbaColorCodeGenerator() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let alpha = +Math.random().toFixed(1);

    let bgColor = `rgba( ${red}, ${green}, ${blue}, ${alpha})`;
    bgBody.style.backgroundColor = bgColor;
    console.log(bgColor);
    document.getElementById('codeBox').style.display = 'block';
    document.getElementById('code').textContent = bgColor;

}

//Math.random() this function returns a random number between 0 and 1
//and if we want no in rang 0 to 16 we will multiply it by 16
//this function gives decimal no. so we will use Math.floor() function to get integer no.
//Math.floor() function returns the largest integer less than or equal to a given number.
//+Math.random().toFixed(2) this function returns a string but as we have added + in start so it will convert it to integer, with the number written with a specified number of decimals: