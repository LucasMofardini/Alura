import { Cliente } from './Cliente.js';
export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    //Proposta de implementação de campos privados em JS https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }
    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }
    sacar(valorSaque){
           
        if(valorSaque > this._saldo){
            return;
        }   
        this._saldo -= valorSaque;
        return valorSaque;
    }
    
    depositar(valorDeposito){
        if(valorDeposito <= 0){
            return;
        }
        this._saldo += valorDeposito;
        return valorDeposito;
    }
    mostraSaldo(){
        return this._saldo;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}