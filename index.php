<?php include_once("index.html"); ?>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Máx Shop</title>
        <style>
            body {
                align-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .main {
                align-items: center;
                border: 1px black line;
                display: flex;
                height: 600px;
                width: 100vw;
            }

            a {
                width: 90vw;
            }
            .buttonDiv {
                align-self: center;
                background-color: yellow;
                display: flex;
                font-size: 3em;
                height: 200px;
                text-align: center;
                width: 90vw;
            }

            .description {
                align-self: center;
                background-color: light-blue;
                display: flex;
                font-size: 3em;
                height: 200px;
                text-align: center;
                width: 90vw;
            }
        </style>
    </head>
    <body>
        <div class="main">
            <div class="description">
                Seja bem-vindo à MáxShop
            </div>
            <div class="buttonDiv">
                <a href="./index.html" target=_blank>Clique Aqui para entrar</a>
            </div>
        </div>
    </body>
</html>