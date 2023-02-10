import { Avaliacao } from "./Avaliacao"
import { Empresa } from "./Empresa"

export interface Produto {
    id: number,
    nome: string,
    empresa: Empresa,
    descricao: string,
    foto: string,
    rating: number,
    boExibir: boolean,
    avaliacoes: Avaliacao[]
}