import React, { useState } from "react";
import "./Regras.css";
import banner from "../../assets/banner_bolao.png";
import { Link, NavLink } from "react-router-dom";

function Regras() {
  return (
    <div className="regras">
      <Link to="/palpite">
        <img
          className="regrasBanner"
          src={banner}
          alt="bolão-joga-junto-desafio-lançado-ganhe-até-10-mil-reais-participe-de-graça"
        />
      </Link>
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
            Assim que você confirmar suas escolhas, é só torcer e aguardar o
            resultado do bolão que sai no dia 25 de setembro (segunda-feira).
          </li>
        </ol>
        <h4>Premiações</h4>
        <p>
          Confira na tabela os prêmios em dinheiro para a quantidade de placares
          que você cravar!
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
        <p>
          A melhor parte é que as premiações serão individuais, o que significa
          que você receberá o valor TOTAL do prêmio, sem a necessidade de
          dividi-lo com outros vencedores.
        </p>
        <h4>Regras</h4>
        <p>
          O Bolão da 24° rodada do Brasileirão será iniciado no dia 15/09 e
          estará disponível para palpites até dia 18/09 às 18:00.
          <br />
          <br />
          Cada cliente que já depositou no site Joga Junto tem direito a um
          palpite. Ou seja, você só tem uma chance para cravar quantos placares
          conseguir e levar o prêmio máximo de 10 mil reais!
          <br />
          <br />O resultado sai na segunda-feira, dia 25/09/2023 e os bônus
          serão creditados até terça-feira dia 26/09/2023.
        </p>
        <h4 className="termsAndConditionsTitle">Termos e condições</h4>
        <ol className="termsAndConditions">
          <li>
            Você é responsável por quaisquer obrigações fiscais (declaração e/ou
            pagamento de impostos) aplicáveis em sua jurisdição em relação a
            quaisquer depósitos, apostas ou taxas de entrada ou a quaisquer
            ganhos/prêmios ou perdas, conforme for aplicável. Os valores de
            prêmios exibidos não incluem quaisquer deduções fiscais (quando
            aplicável).
          </li>
          <li>
            O prêmio é pago em reias (BRL) e será pago na conta do cliente no
            site do Joga Junto.
          </li>
          <li>
            Máximo de uma oferta por cliente. Todas as ofertas aos clientes são
            limitadas a uma pessoa, família, endereço residencial, IP, endereço
            e email, número de telefone, mesmo número de conta de pagamento,
            dispositivo móvel, tablet ou computador partilhado, por exemplo
            biblioteca pública ou local de trabalho. Reservamos o direito de
            retirar a disponibilidade de qualquer oferta ou todas as ofertas a
            qualquer cliente ou grupo de clientes em qualquer momento e em nosso
            critério exclusivo e absoluto.
          </li>
          <li>
            A Joga Junto se reserva o direito de remover a funcionalidade do
            Bolão para qualquer cliente ou grupo de clientes, caso existam
            provas razoáveis para acreditar que o cliente ou grupo de clientes
            estejam fazendo utilização indevida da funcionalidade.
          </li>
          <li>
            As ofertas se aplicam apenas a clientes que tenham uma conta
            JogaJunto e que fizeram um depósito em dinheiro real com a Joga
            Junto.
          </li>
          <li>
            A Joga Junto se reserva o direito de aceitar ou recusar qualquer
            entrada no Desafio do Bolão.
          </li>
          <li>
            Por questões de Segurança, poderemos solicitar comprovantes de
            Identificação Válidos, tais como documentos de identidade com foto,
            passaporte, ou carteira de habilitação para verificar a sua
            identidade antes de autorizar qualquer retirada da conta Joga Junto
            referente aos ganhos provenientes do Bolão.
          </li>
          <li>
            O Joga Junto reserva-se no direito de cancelar a participação a
            qualquer momento de qualquer conta que seja considerada abusiva.
          </li>
          <li>
            A Joga Junto se reserva o direito de alterar, suspender ou remover a
            funcionalidade do Bolão (ou qualquer parte dela) para qualquer
            evento, partida ou cliente a qualquer momento;
          </li>
          <li>
            A Joga Junto se reserva o direito de reaver qualquer prêmio em
            dinheiro atribuído para uma entrada no Bolão se o resultado de uma
            partida no jogo relevante tiver sido determinada erroneamente.
          </li>
          <li>
            A funcionalidade do Bolão está disponível a critério da Joga Junto e
            esta não oferece garantias quanto à sua disponibilidade. A Joga
            Junto não poderá ser responsabilizada se a funcionalidade do Bolão
            não estiver disponível por motivos técnicos.
          </li>
          <li>Termos e Condições Gerais da Joga Junto se aplicam.</li>
        </ol>
      </div>
      <NavLink to="/palpite" className="cta">
        Participe agora!
      </NavLink>
    </div>
  );
}

export default Regras;
