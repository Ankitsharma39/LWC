import { LightningElement,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
//const fields = [NAME_FIELD];
export default class Selector extends LightningElement {
    userId = Id;
    @wire(getRecord, { recordId: '$userId', NAME_FIELD })
    userfields({data}){
        if(data){
            console.log(data)
        }
    }

}
