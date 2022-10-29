
function enviarForm(){
  


  if(document.formv.nombre.value  == null || document.formv.nombre.value.length < 7){
    alert('Ingresar nombre y apellido completos')
    document.formv.nombre.focus()
   return 0;
  }

  let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(!mailformat.test(document.formv.mail.value)){
    alert('Ingrese un mail válido')
    document.formv.mail.focus()
    return 0;
  }
}
