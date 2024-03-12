import { LightningElement, api} from 'lwc';

export default class WorkExpDescription extends LightningElement {
    isLoaded=false;
    @api content
    //description to html
    renderedCallback(){
        if(this.isLoaded){
            return false
        }
        if(this.content){
            this.isLoaded=true
            const container= this.template.querySelector('.htmlContainer')
            container.innerHTML = this.content
        }
    }
}