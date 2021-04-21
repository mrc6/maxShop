// Constantes e variáveis globais
let nomeCliente = document.getElementById('nome');
let cpfCliente = document.getElementById('cpf');
let cepCliente = document.getElementById('cep');
let dataNascimentoCliente = document.getElementById('dataNascimento');
let dddCliente = document.getElementById('ddd');
let telefoneCliente = document.getElementById('phone');
let emailCliente = document.getElementById('email');

let ruaCliente = document.getElementById('rua');
let numeroEnderecoCliente = document.getElementById('numeroEndereco');
let complementoCliente = document.getElementById('complemento');
let bairroCliente = document.getElementById('bairro');
let cidadeCliente = document.getElementById('cidade');
let estadoCliente = document.getElementById('estado');

let cadastrarBTN = document.getElementById('cadastrar');

// funcoes
const redireciona = () => {
    let dadosCliente = JSON.parse(localStorage.getItem("shopMaxDC01"));
    if(dadosCliente){
        window.location.replace("./canecaLogistica.html");
    }
}

redireciona();

cpfCliente.addEventListener('input', function mascara() {
    let value = cpfCliente.value.replace(/\D+/, ''); //Remove tudo que não for numero
    //value = value.replace(/^(\d+)(\d{3})$/, '$1.$2');
    cpfCliente.value = value;
});

cepCliente.addEventListener('input', function mascara() {
    var value = cepCliente.value.replace(/\D+/, ''); //Remove tudo que não for numero
    value = value.replace(/^(\d+)(\d{3})$/, '$1-$2');      
    cepCliente.value = value;
});

cadastrarBTN.addEventListener('click', function gravaDados() {
    
    let dadosCliente = {
        senderName: nomeCliente.value,
        senderCPF: cpfCliente.value,
        senderBornDate: dataNascimentoCliente.value,
        senderAreaCode: dddCliente.value,
        senderPhone: telefoneCliente.value,
        senderEmail: emailCliente.value,
        shippingAddressStreet: ruaCliente.value,
        shippingAddressNumber: numeroEnderecoCliente.value,
        shippingAddressComplement: complementoCliente.value,
        shippingAddressDistrict: bairroCliente.value,
        shippingAddressCity: cidadeCliente.value,
        shippingAddressState: estadoCliente.value,
        shippingAddressPostalCode: cepCliente.value
    };

    localStorage.setItem("shopMaxDC01", JSON.stringify(dadosCliente));
    redireciona();
});

