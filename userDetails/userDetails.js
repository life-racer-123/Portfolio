import { LightningElement, api } from 'lwc';

export default class UserDetails extends LightningElement {
      recordId = "a0b5j00000hhqqlAAA";
     objectApiName = "Portfolio__c";
    
    @api resumeUrl;
    downloadResume(){
        window.open("https://drive.google.com/file/d/1Pgp8Lugkp20p_fd0oHEcKJ490ObWXNDv/view?usp=sharing","_blank");
    }
}