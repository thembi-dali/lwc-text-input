import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track outputText;

    get options() {
        return [
            { label: 'Add', value: 'added' },
            { label: 'Remove', value: 'removed' },
        ];
    }

    updateText(event) {
        this.outputText = this.template.querySelector('lightning-input').value;
    }
}