import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {MessageContext,subscribe,APPLICATION_SCOPE} from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {
    receivedMessage 
      @wire(MessageContext)
        context
       //Subscribing to message channel
       connnectedCallBack(){
        this.subscribeMessage()
       }
       subscribeMessage(){
       subscribe(this.context, SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})  
  }
       handleMessage(message){
           this.receivedMessage = message.lmsData.value? message.lmsData.value :'No Message Published'
       }
}