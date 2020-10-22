const exibeEndereco= (endereco)=> {
    let CEP= document.getElementById("cep").value;
    
    let Cidade= document.getElementById("cidade");
    Cidade.innerHTML= endereco.cidade;

    let Estado= document.getElementById("estado");
    Estado.innerHTML= endereco.estado;

    let Logradouro= document.getElementById("logradouro");
    Logradouro.innerHTML= endereco.logradouro;

    let Bairro= document.getElementById("bairro");
    Bairro.innerHTML= endereco.bairro;

    let Complemento= document.getElementById("complemento");
    Complemento.innerHTML= endereco.complemento;
};

const urlEnderecoDesejado= ()=> {
    const urlEndereco= `https://api.postmon.com.br/v1/cep/${CEP}`;
};

const iniciar= async ()=> {
    const url= urlEnderecoDesejado();
    const response = await fetch(url);
    const result = await response.json();
    exibeEndereco(result);
};

document.addEventListener('DOMContentLoaded', iniciar);