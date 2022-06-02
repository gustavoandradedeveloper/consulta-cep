function consultar(cep){	

    let url = 'https://viacep.com.br/ws/'+cep+'/json/';

    let objXmlHttpRequest = new XMLHttpRequest;

    objXmlHttpRequest.open('GET', url);

    //console.log(objXmlHttpRequest);

    objXmlHttpRequest.onreadystatechange = () => {
        
        if(objXmlHttpRequest.readyState == 4 && objXmlHttpRequest.status == 200){
            let dadosText = objXmlHttpRequest.responseText;
            let dadosCepObj = JSON.parse(dadosText);
            //console.log(dadosCepObj);
            
            let endereco = dadosCepObj.logradouro;
            let Bairro = dadosCepObj.bairro;
            let Cidade = dadosCepObj.localidade;
            let uf = dadosCepObj.uf;

            document.getElementById('endereco').value = endereco ;
            document.getElementById('bairro').value = Bairro ;
            document.getElementById('cidade').value = Cidade ;
            document.getElementById('uf').value = uf ;
    } 
}
    objXmlHttpRequest.send();
}