document.onkeypress=function(e){
    document.querySelector('.h1').style.display='none';
    document.querySelector('.h2').style.display='inline-flex';
    document.getElementById('key').innerText="";
    document.getElementById('key').innerText=e.key;
    document.getElementById('code').innerText="";
    document.getElementById('code').innerText=e.keyCode;
}
let b1=document.getElementById('cp');
b1.onclick=function()
{
    document.execCommand('copy');
}
b1.addEventListener('copy',(e)=>{
    e.preventDefault();
    if (e.clipboardData) {
        e.clipboardData.setData("text/plain", document.getElementById('code').innerText);
      }
})