import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANY from '@salesforce/schema/Portfolio__c.CompanyName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';

export default class PortfolioBanner extends LightningElement {
    @api recordId //='a0b5j00000hhqqlAAA';
    @api linkedinUrl// = 'https://www.linkedin.com/in/shubham-jadhav-7438791a6/';
    @api trailheadUrl//= 'https://www.salesforce.com/trailblazer/sjadhav351';
    @api githubUrl //= '';
    @api twitterUrl //= '';

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`;

    
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME, COMPANY_LOCATION, COMPANY, DESIGNATION]})
    PortfolioData;
    // portfolioHandler({data,error}){
    //     if(data){
    //         console.log("record data", JSON.stringify(data));
    //     }
    //     if(error){
    //         console.error("error", error);
    //     }
    // }

    get fullName(){
        return getFieldValue(this.PortfolioData.data, FULLNAME);
    }
    get companyName(){
        return getFieldValue(this.PortfolioData.data, COMPANY);
    }

    get companyLocation(){
        return getFieldValue(this.PortfolioData.data, COMPANY_LOCATION);
    }

    get designation(){
        return getFieldValue(this.PortfolioData.data, DESIGNATION);
    }


    
}