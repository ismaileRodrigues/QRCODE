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


  const API =`https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${texarea.value}`
  document.querySelector('#QRCodeimage').src = API;

 texarea.value=''
 texarea.focus()

  
}


