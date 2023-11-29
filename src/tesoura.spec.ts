import { Jogador } from './jogador';
import { Jogo } from './jogo';
describe('tesoura', () => {
  let jogador1: Jogador;
  let jogador2: Jogador;
  let jogo: Jogo;

  beforeEach(() => {
    jogador1 = new Jogador();
    jogador2 = new Jogador();
    jogo = new Jogo();
  });

  it('tesoura deve emparta com tesoura', () => {
    jogador1.jogada = 'tesoura';
    jogador2.jogada = 'tesoura';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('empate');
  });

  it('se algum jogador nao jogar deve anular o jogo', () => {
    jogador1.jogada = 'tesoura';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('jogo anulado');
  });

  it('se algum jogador nao jogar deve anular o jogo', () => {
    jogador2.jogada = 'tesoura';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('jogo anulado');
  });

  it('tesoura ganha de papel', () => {
    jogador1.jogada = 'papel';
    jogador2.jogada = 'tesoura';

    const resultado = jogo.jogar(jogador1, jogador2);

    expect(resultado).toEqual('tesoura - ganhou');
  });
});
