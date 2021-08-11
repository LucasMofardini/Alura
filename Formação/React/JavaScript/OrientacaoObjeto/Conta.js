export class Conta{

    constructor(saldoInicial,cliente,agencia){
        this._saldo  = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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