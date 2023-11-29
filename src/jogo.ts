import { Jogador } from './jogador';
export class Jogo {
  jogadas = [
    { jogada: 'pedra', perde: 'papel', ganha: 'tesoura' },
    { jogada: 'tesoura', ganha: 'papel', perde: 'pedra' },
    { jogada: 'papel', ganha: 'pedra', perde: 'tesoura' },
  ];

  jogar(jogador1: Jogador, jogador2: Jogador): string {
    if (jogador1.jogada == undefined || jogador2.jogada == undefined)
      return 'jogo anulado';

    if (jogador1.jogada === jogador2.jogada) return 'empate';

    const jogada = this.jogadas.find(
      (jogada) => jogada.jogada === jogador1.jogada,
    );

    return jogador1.jogada === jogada.perde
      ? `${jogador2.jogada} - ganhou`
      : `${jogador1.jogada} - ganhou`;

    // return jogador2.jogada === jogada.ganha
    //   ? `${jogador1.jogada} - ganhou`
    //   : `${jogador2.jogada} - ganhou`;

    // if (jogador1.jogada === 'pedra' && jogador2.jogada === 'tesoura')
    //   return 'pedra - ganhou';

    // if (jogador2.jogada === 'pedra' && jogador1.jogada === 'tesoura')
    //   return 'pedra - ganhou';

    // if (jogador2.jogada === 'tesoura' && jogador1.jogada === 'papel')
    //   return 'tesoura - ganhou';

    // if (jogador1.jogada === 'pedra' && jogador2.jogada === 'papel')
    //   return 'papel- ganhou';
  }
}
