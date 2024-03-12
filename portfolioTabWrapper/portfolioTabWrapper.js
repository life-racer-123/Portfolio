import { LightningElement, wire } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import timesheet from '@salesforce/resourceUrl/timesheet';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioTabWrapper extends LightningElement {
    recordId='a0b5j00000hhqqlAAA';
    objectApiName='Portfolio__c';
    projectImg=`${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    timesheetImg=`${timesheet}`

   
}