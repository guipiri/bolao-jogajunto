import React, { useState } from "react";
import "./Regras.css";

function Regras() {
  return (
    <div className="regras">
      <div className="regrasDiv">
        <h2>Você consegue acertar 6 placares da rodada?</h2>
        <p>
          Para participar é muito fácil. Basta você ter feito um depósito no
          site do Joga Junto de qualquer valor e você já pode entrar no bolão
          gratuitamente.
        </p>
        <h4>Como jogar?</h4>
        <ol>
          <li>Acesse o site e faça o login na sua conta.</li>
          <li>
            Certifique-se de ter feito pelo menos um (1) depósito no site do
            Joga Junto de qualquer valor. 
          </li>
          <li>Escolha os seus palpites nos 10 jogos disponíveis.</li>
          <li>
            Assim que você confirmar suas escolhas, um e-mail automático com os
            seus palpites será enviado para sua caixa de entrada.
          </li>
        </ol>
        <h4>Premiações</h4>
        <p>
          Confira na tabela os prêmios em bônus para a quantidade de placares
          que você acertar!
        </p>
        <div className="divTable">
          <table>
            <tbody>
              <tr>
                <td>1 Placar</td>
                <td>R$25</td>
              </tr>
              <tr>
                <td>2 Placares</td>
                <td>R$50</td>
              </tr>
              <tr>
                <td>3 Placares</td>
                <td>R$200</td>
              </tr>
              <tr>
                <td>4 Placares</td>
                <td>R$500</td>
              </tr>
              <tr>
                <td>5 Placares</td>
                <td>R$1.000</td>
              </tr>
              <tr>
                <td>6 Placares</td>
                <td>R$10.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Regras</h4>
        <p>
          O Bolão da 24 ° rodada do Brasileirão será iniciado no dia 15/09 e
          estará disponível para palpites até dia 18/09 às 18:00. <br /> Cada
          cliente que já depositou no site Joga Junto tem direito de dar um
          palpite. Ou seja, você só tem uma chance para cravar quantos placares
          conseguir e levar o prêmio máximo de 10 mil reais!
        </p>
        <h4>Termos e condições</h4>
        <p>......</p>
      </div>
    </div>
  );
}

export default Regras;
