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
                align-content: space-around;
                align-items: center;
                border: 1px black line;
                display: flex;
                flex-direction: column;
                height: 640px;
                width: 100vw;
            }

            a {
                max-width: 640px;
                width: 90vw;
            }

            .buttonDiv {
                align-self: center;
                background-color: yellow;
                display: flex;
                font-size: 3em;
                height: 200px;
                text-align: center;
                max-width: 640px;
                width: 90vw;
            }

            .description {
                align-self: center;
                background-color: #add8e6;
                display: flex;
                font-size: 3em;
                height: 200px;
                text-align: center;
                max-width: 640px;
                width: 90vw;
            }

            span {
                max-width: 640px;
                width: 90vw;
            }
        </style>
    </head>
    <body>
        <div class="main">
            <div class="description">
                <span>Seja bem-vindo à MáxShop</span>
            </div>
            <div class="buttonDiv">
                <a href="./index.html" target=_blank>Clique Aqui para entrar</a>
            </div>
        </div>
    </body>
</html>