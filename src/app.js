import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track outputText;
    updateText(event) {
        this.outputText = this.template.querySelector('lightning-input').value;
    }
}