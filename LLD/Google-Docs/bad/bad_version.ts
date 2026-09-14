
class DocumentEditor {
    private elements: string[];

    constructor() {
        this.elements = [];
    }

    addText(text: string) {
        this.elements.push(text);
    }

    addImage(src: string) {
        this.elements.push(`[image] ${src}`);
    }

    renderDocument() {
        return this.elements.join('\n');
    }

    saveDocument() {
        // Implementation for saving the document
        console.log("Document saved.");
    }
}

const doc = new DocumentEditor();
doc.addText("Hello, world!");
doc.addImage("image.png");
console.log(doc.renderDocument());

export {};