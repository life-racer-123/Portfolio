import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIELD from '@salesforce/schema/Portfolio__c.SalesforceCertifications__c';
import OTHER_CERT_FIELD from '@salesforce/schema/Portfolio__c.OtherCertifications__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioCertifications extends LightningElement {
    sfCertList=[];
    otherCertList=[];
    @api recordId;
    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SF_CERT_FIELD, OTHER_CERT_FIELD]
    })certsHandler({data, error}){
        if(data){
            console.log('Cert data',data);
            this.formatData(data);
        }
        if(error){
            console.error(error);
        }
    }
    formatData(data){
        const {SalesforceCertifications__c, OtherCertifications__c} = data.fields;
        this.sfCertList = SalesforceCertifications__c ? SalesforceCertifications__c.value.split(';').map(item=>{
            return `Salesforce Certified ${item}`
        }):[];
        this.otherCertList=OtherCertifications__c ? OtherCertifications__c.value.split(','):[];
    }
}