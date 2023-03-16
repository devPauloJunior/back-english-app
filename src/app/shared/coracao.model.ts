export class Coracao {
    constructor(
        public cheio: boolean,
        public coracaoCheio: string = '/assets/coracao_cheio.png',
        public coracaoVazio: string = '/assets/coracao_vazio.png'
    ) {}

    public exibeCoracao(): string {
        if (this.cheio) {
            return this.coracaoCheio;
        } else {
            return this.coracaoVazio;
        }
    }
}