// funções iniciais
const redireciona = () => {
    let dadosCliente = JSON.parse(localStorage.getItem("shopMaxDC01"));
    if(!dadosCliente){
        window.location.replace("./index.html");
    }
}

redireciona();


const usuarioLogado = () => {
    let dadosCliente = JSON.parse(localStorage.getItem("shopMaxDC01"));
    const newDiv = document.createElement("div");
    newDiv.id = "usuarioLogado";
    const user = document.createElement("p");
    user.id = 'userName';
    user.innerHTML = dadosCliente['senderName'];
    const sairBTN = document.createElement("button");
    sairBTN.innerHTML = "Sair";
    sairBTN.id = 'sairBTN';
    const tituloHTML = document.getElementsByClassName('descricaoProduto');
    newDiv.appendChild(user);
    newDiv.appendChild(sairBTN);
    tituloHTML[0].appendChild(newDiv);

    sairBTN.addEventListener('click', function logoff() {
        localStorage.removeItem("shopMaxDC01");
        redireciona();
    });
}

usuarioLogado();


// parametros
const jsonBody = {
    nCdEmpresa: '',
    sDsSenha: '',
    nCdServico: '04510',
    sCepOrigem: '96200110',
    sCepDestino: '',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '18',
    nVlAltura: '9',
    nVlLargura: '13.5',
    nVlDiametro: '0',
    sCdMaoPropria: 'n',
    nVlValorDeclarado: '0',
    sCdAvisoRecebimento: 'n'
};

const compradorParameters = {
    currency:"BRL",
    itemId1:"0001",
    itemDescription1:"Notebook Prata",
    itemAmount1:"100.00",
    itemQuantity1:"1",
    itemWeight1:"1000",
    reference:"REF1234",
    senderName:"Jose Comprador",
    senderAreaCode:"11",
    senderPhone:"56713293",
    senderCPF:"38440987803",
    senderBornDate:"12/03/1990",
    senderEmail:"email@sandbox.pagseguro.com.br",
    shippingType:1,
    shippingAddressStreet:"Av. Brig. Faria Lima",
    shippingAddressNumber:"1384",
    shippingAddressComplement:"2o andar",
    shippingAddressDistrict:"Jardim Paulistano",
    shippingAddressPostalCode:"01452002",
    shippingAddressCity:"Sao Paulo",
    shippingAddressState:"SP",
    shippingAddressCountry:"BRA",
    extraAmount:"0.00",
    redirectURL:"http://sitedocliente.com",
    notificationURL:"https://url_de_notificacao.com",
    maxUses:"1",
    maxAge:"3000",
    shippingCost:"0.00"
};

// Constantes e variáveis globais
const productTitle = 'Caneca Logística';
const productDescription = "Caneca Logistica";
const referencia = "REF1234";
const precoProduto = '34,99';
const imgSrc = 'https://img.elo7.com.br/product/main/2807BEC/caneca-personalizada-logistica-dia-das-crinca.jpg';
let precoCalculadoFrete = "0,00";
const valorFreteCalculado = document.getElementById('freteCalculado');
const valorTotal = document.getElementById('total');
let cepCliente = document.getElementById('cep');
let observation = document.getElementById('observacao');
let payload = {};

// funcoes
document.getElementById('tituloProduto').innerHTML = productTitle;
document.getElementById('imgProduto').src = imgSrc;
document.getElementById('valorProduto').innerText = `Preço: R$: ${precoProduto}`;

function sayHello() {
    console.log('Hello!');
};

/*	This work is licensed under Creative Commons GNU LGPL License.
License: http://creativecommons.org/licenses/LGPL/2.1/
Version: 0.9
Author:  Stefan Goessner/2006
Web:     http://goessner.net/ 
*/
function json2xml(o, tab) {
var toXml = function(v, name, ind) {
    var xml = "";
    if (v instanceof Array) {
        for (var i=0, n=v.length; i<n; i++)
            xml += ind + toXml(v[i], name, ind+"\t") + "\n";
    }
    else if (typeof(v) == "object") {
        var hasChild = false;
        xml += ind + "<" + name;
        for (var m in v) {
            if (m.charAt(0) == "@")
            xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
            else
            hasChild = true;
        }
        xml += hasChild ? ">" : "/>";
        if (hasChild) {
            for (var m in v) {
            if (m == "#text")
                xml += v[m];
            else if (m == "#cdata")
                xml += "<![CDATA[" + v[m] + "]]>";
            else if (m.charAt(0) != "@")
                xml += toXml(v[m], m, ind+"\t");
            }
            xml += (xml.charAt(xml.length-1)=="\n"?ind:"") + "</" + name + ">";
        }
    }
    else {
        xml += ind + "<" + name + ">" + v.toString() +  "</" + name + ">";
    }
    return xml;
}, xml="";
for (var m in o)
    xml += toXml(o[m], m, "");
return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
}


function getString(o) { // transforma um objeto js em url-encoded params

    function iter(o, path) {
        if (Array.isArray(o)) {
            o.forEach(function (a) {
                iter(a, path + '[]');
            });
            return;
        }
        if (o !== null && typeof o === 'object') {
            Object.keys(o).forEach(function (k) {
                iter(o[k], path + '[' + k + ']');
            });
            return;
        }
        data.push(path + '=' + o);
    }

    var data = [];
    Object.keys(o).forEach(function (k) {
        let value = o[k];
        if (typeof(value) == "string"){
            iter(encodeURIComponent(value), k);
        } else {
            iter(value, k);
            // iter(o[k], k);
        }
    });
    return data.join('&');
}

function redirecionaCheckout(response) {
    const jsonObj = xmlToJSON.parseString(response); // Convert XML to JSON
    const codigoCheckout = jsonObj.checkout[0].code[0]._text;
    console.log("Resposta da API XML", jsonObj);

    // window.location.replace(`https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${codigoCheckout}`); // sandbox
    window.location.replace(`https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${codigoCheckout}`); // produção
};

function sendToApi() {
    // const apiToFetch = "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=marco_meireles@ig.com.br&token=AA91EBBCCCD547E9ABA425583D6B59BA";
    const apiToFetch = "https://corspagsegurocheckout.herokuapp.com/";
    var myHeaders = new Headers();
    myHeaders.append("XML", "application/xml; charset=ISO-8859-1");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "TRANSACTION_COOKIE=ad1cc2d6e25642d23a80196302127aa4");

    var raw = getString(payload);
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(apiToFetch, requestOptions)
    .then(response => response.text())
    .then((result) => {
        // console.log(result);
        if(result) redirecionaCheckout(result);
        
    })
    .catch(error => console.log('error', error));
};


function commaStingToNumber(string) {
    return Number(string.replace(',','.'));
};

function removeBotaoComprar() {
    const calculosHTML = document.getElementById('calcularFrete');
    if (document.getElementById('comprarBTN')){
        const lastChild = calculosHTML.lastElementChild;
        calculosHTML.removeChild(lastChild);
    }
};

function preencheDados() {
    const observationDescription = observation.value;
    valorFreteCalculado.innerText = `Valor do Frete: R$: ${precoCalculadoFrete}`;
    const soma = commaStingToNumber(precoCalculadoFrete) + commaStingToNumber(precoProduto);
    valorTotal.innerText = `Valor total - R$: ${soma}`;
    const comprarBTN = document.createElement("button");
    comprarBTN.innerHTML = "Comprar";
    comprarBTN.id = 'comprarBTN';
    const calculosHTML = document.getElementById('calcularFrete');
    calculosHTML.appendChild(comprarBTN);

    const clientData = JSON.parse(localStorage.getItem("shopMaxDC01"));
    payload = { ...compradorParameters, ...clientData };

    payload.itemDescription1 = `${productDescription} - ${observationDescription}`;
    payload.reference = referencia;
    payload.itemAmount1 = precoProduto.replace(",",".");
    payload.shippingCost = precoCalculadoFrete.replace(",", ".");

    comprarBTN.addEventListener('click', sendToApi);
};

function calculaFrete() {
    // reseta os valores
    valorFreteCalculado.innerText = 'Valor do Frete: R$:';
    valorTotal.innerText = 'Valor total - R$:';
    removeBotaoComprar();

    // constantes
    const cepDestino = cepCliente.value.replace("-", "");
    if (!cepDestino) {
        return window.alert('Digite o CEP');
    }
    if (!observation.value) {
        return window.alert('Digite o nome para ser colocado na caneca!');
    }
    jsonBody.sCepDestino = cepDestino;

    fetch('https://consulta-frete-correios.herokuapp.com/v1/calc-preco/', {
        method: 'POST',
        body: JSON.stringify(jsonBody), // The data
        headers: {
            'Content-type': 'application/json' // The type of data you're sending
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        if (data){
            // console.log(data.Valor);
            // chama a funcao para preencher os dados na tela
            precoCalculadoFrete = data.Valor;
            preencheDados();
        }

    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });

}

cepCliente.addEventListener('input', function mascara() {
    var value = cepCliente.value.replace(/\D+/, ''); //Remove tudo que não for numero
    value = value.replace(/^(\d+)(\d{3})$/, '$1-$2');      
    cepCliente.value = value;
});
