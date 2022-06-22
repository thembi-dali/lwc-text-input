import { LightningElement, api,track } from 'lwc';
import getFields from '@salesforce/apex/wk_FilterComponent.getFields';
export default class FilterComponent extends LightningElement {
    @track selectedOption;
    changeHandler(event) {
    const field = event.target.name;
    if (field === 'optionSelect') {
        this.selectedOption = event.target.value;
            alert("you have selected : "this.selectedOption);
        } 
    }
}