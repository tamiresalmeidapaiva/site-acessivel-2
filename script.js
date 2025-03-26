 document.addEventListener('DOMContentLoaded',Function(){
 let tamanhoATualFonte= 1;
 const aumentaFontBotao= document.getElementById ('aumentar-fonte');
 
 aumentaFonteBotao.addEventlistener('clik', function(){ 
    tamanhoATualFonte += 0.1;
    document.body.style.fontSize='${tamanhoAtualFonte}rem';
 })
 const diminuirfonteBotao= document.getElementById('di,inuir-fonte');
 tamanhoATualFonte-= 0.1;
 document.body.style.fontSize= '$(tamanhoATualFonte)'rem';
 })
})