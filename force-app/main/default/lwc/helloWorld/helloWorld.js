import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    name ="Ankita"
    fullname
    isFalse = false
    surname 
changeHandler(event){
    this.surname = event.target.value
    }
  address = {
             city:"melbourne",
             postalcode:2226,
             country:"Australia"  
    }  
trackHandler(event){
      this.address = {...this.address,city:event.target.value}
  }  
     dataCheck(){
     this.isFalse = true
  }
  get helloMethod(){
       return this.surname ==='hello'
  }
}