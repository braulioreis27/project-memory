export class Colaborador {
    id: number | undefined;
    cpf: string | undefined;
    nome: string | undefined;
    dataAdmissao: Date | undefined;
    funcao: string | undefined;
    remuneracao: number | undefined;
    gerenteId?: number;
}
