const texarea = document.querySelector('textarea');
const dialog = document.querySelector('dialog');
const fechar = document.querySelector('#fechar');


fechar.onclick = function(){
  dialog.close()
}
const gerarQR = () => {
  dialog.show()
  if(texarea.value===''){
    alert('Insira um texto!')
    texarea.style.border=' 2px solid red'
    return;
   
  }


const API = `https://quickchart.io/qr?text=${encodeURIComponent(texarea.value)}`
document.querySelector('#QRCodeimage').src = API;


 texarea.value=''
 texarea.focus()

  
}


