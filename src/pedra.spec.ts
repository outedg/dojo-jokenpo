import { Jogador } from './jogador';
import { Jogo } from './jogo';

describe('pedra', () => {
  let jogador1: Jogador;
  let jogador2: Jogador;
  let jogo: Jogo;

  beforeEach(() => {
    jogador1 = new Jogador();
    jogador2 = new Jogador();
    jogo = new Jogo();
  });

  it('pedra deve empatar com pedra', () => {
    jogador1.jogada = 'pedra';
    jogador2.jogada = 'pedra';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('empate');
  });

  it('jogador um jogar pedra deve ganhar de tesoura do jogador 2', () => {
    jogador1.jogada = 'pedra';
    jogador2.jogada = 'tesoura';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('pedra - ganhou');
  });

  it('jogador dois jogar pedra deve ganhar de tesoura do jogador 1', () => {
    jogador1.jogada = 'tesoura';
    jogador2.jogada = 'pedra';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('pedra - ganhou');
  });

  it('jogador um for pedra e jogador dois for papel', () => {
    jogador1.jogada = 'pedra';
    jogador2.jogada = 'papel';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('papel- ganhou');
  });
});
