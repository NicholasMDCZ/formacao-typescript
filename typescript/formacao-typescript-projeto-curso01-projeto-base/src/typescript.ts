let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

const lista: number[] = [];
lista.push(12, 19, 5, 66, 1.19)

type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}