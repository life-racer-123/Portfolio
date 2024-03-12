import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COL = [ { label: 'Education', fieldName: 'Education' },
{ label: 'Institution Name', fieldName: 'InstitutionName' },
{ label: 'Passing Year', fieldName: 'PasingYear' },
];
export default class PortfolioEducation extends LightningElement {
   
    tableData=[];
    
    @api recordId;

    columns = COL; 
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Educations__r',
        fields: ['Education__c.InstitutionName__c','Education__c.PassingYear__c','Education__c.Title__c'],
        sortBy: ['Education__c.PassingYear__c']
    })EduactionHandler({data,error}){
        if(data){
            //console.log("Education", data);
            this.formatData(data);
        }
        if(error){
            console.error(error);
        }
    }

    formatData(data){
        this.tableData=[...data.records].reverse().map(item=>{
            let Id = item.id;
            const {InstitutionName__c, PassingYear__c, Title__c} =item.fields;
            let Education = Title__c.value;
            let InstitutionName = InstitutionName__c.value;
            let PasingYear = PassingYear__c.value;
            return {
                Id, Education, InstitutionName, PasingYear
            }
        })
        //console.log("table data", JSON.stringify(this.tableData));
    }
}