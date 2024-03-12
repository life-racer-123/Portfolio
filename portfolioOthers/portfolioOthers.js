import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGES from '@salesforce/schema/Portfolio__c.SuperBadges__c';
import LANGUAGES from '@salesforce/schema/Portfolio__c.Languages__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioOthers extends LightningElement {

    @api recordId;
    lang=[];
    superBadges = [];
    badgeImg = `${PortfolioAssets}/PortfolioAssets/badge.png`;
    langImg = `${PortfolioAssets}/PortfolioAssets/language.png`;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SUPERBADGES, LANGUAGES]
    })OtherHandler({data, error}){
        if(data){
            console.log("other data",data);
            this.formatData(data);
        }
        if(error){
            console.error(error);
        }
    }
    formatData(data){
        const {Languages__c, SuperBadges__c} = data.fields;
        this.lang=Languages__c ? Languages__c.value.split(',') : [];
        this.superBadges = SuperBadges__c ? SuperBadges__c.value.split(';'):[];
    }
}