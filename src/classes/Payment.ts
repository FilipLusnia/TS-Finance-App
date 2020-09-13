import {HasFormatter} from '../interfaces/HasFormatter';

export class Payment implements HasFormatter{
    recipient: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number){
        this.recipient = client;
        this.details = details;
        this.amount = amount;
    }

    format(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
};