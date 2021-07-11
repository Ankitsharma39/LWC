import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carlist = ["Ford","Audi","Maruti","Hyundai","BMW"]
    ceolist = [
        {
            id:1,
            company:"Google",
            ceo:"sundar"
        },
        {
            id:2,
            company:"microsoft",
            ceo:"Tim cook"
        },
        {
            id:3,
            company:"Facebook",
            ceo:"Mark"

        },
        {   id:4,
            company:"Amazon",
            ceo:"unknown"
        }
    ]
}