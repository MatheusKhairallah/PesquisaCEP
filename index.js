const exibeEndereco= (endereco)=> {
    const CEP= document.getElementById("cep").value;
};

const urlEnderecoDesejado= ()=> {
    const urlEndereco= 'https://api.postmon.com.br/v1/cep';
};

const iniciar= async ()=> {
    const url= urlEnderecoDesejado();
    const response = await fetch(url);
    const result = await response.json();
    exibeEndereco(result);
};

document.addEventListener('DOMContentLoaded', iniciar);