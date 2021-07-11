public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
   
    public static list<contact>getContacts() {
        throw new AuraHandledException('Forced error'); 
}
}