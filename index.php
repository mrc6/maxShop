<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Caneca Logística</title>
        <style>
        </style>
    </head>
    <body>
        <div class="mainContent">
            <div>
                <p>Bem vindo à Max Logística</p>
                <p>Cadastre-se por favor</p>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label for="senderName">Nome</label>
                    <input id="nome" type="text" name="senderName" /><br />
                    <label for="senderCPF">CPF</label>
                    <input id="cpf" type="text" name="senderCPF" maxLength="14" /><br />
                    <label for="senderBornDate">Data de Nascimento</label>
                    <input id="dataNascimento" type="text" name="senderBornDate" maxLength="10"/><br />

                    <p>Contato</p>
                    <label for="senderAreaCode">DDD</label>
                    <input id="ddd" type="text" name="senderAreaCode" maxlength="2"/><br />
                    <label for="senderPhone">Telefone</label>
                    <input id="phone" type="text" name="senderPhone" maxlength="9"/><br />
                    <label for="senderEmail">Email</label>
                    <input id="email" type="text" name="senderEmail" /><br />

                    <p>Endereço</p>
                    <label for="shippingAddressStreet">Rua</label>
                    <input id="rua" type="text" name="shippingAddressStreet" /><br />
                    <label for="shippingAddressNumber">Número</label>
                    <input id="numeroEndereco" type="text" name="shippingAddressNumber" /><br />
                    <label for="shippingAddressComplement">Complemento</label>
                    <input id="complemento" type="text" name="shippingAddressComplement" /><br />
                    <label for="shippingAddressDistrict">Bairro</label>
                    <input id="bairro" type="text" name="shippingAddressDistrict" /><br />
                    <label for="shippingAddressCity">Cidade</label>
                    <input id="cidade" type="text" name="shippingAddressCity" /><br />
                    <label for="shippingAddressState">Estado</label>
                    <input id="estado" type="text" name="shippingAddressState" maxlength="2"/><br />
                    <label for="shippingAddressPostalCode">CEP</label>
                    <input id="cep" type="text" name="shippingAddressPostalCode" maxlength="9"/><br />
                    <button id="cadastrar" type="button">Cadastrar</button>                   
                </fieldset>
            </div>
        </div>
        <script src="index.js"></script>
    </body>

</html>
