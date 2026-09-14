
// Elements 
interface DocumentElement {
    render(): string;
}

class TextElement implements DocumentElement {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    render() {
        return this.text;
    }
}

class ImageElement implements DocumentElement {
    private src: string;

    constructor(src: string) {
        this.src = src;
    }

    render() {
        return `<img src="${this.src}" />`;
    }
}

class Document {
    private elements: DocumentElement[];

    constructor() {
        this.elements = [];
    }

    addElement(element: DocumentElement) {
        this.elements.push(element);
    }

    render() {
        return this.elements.map(element => element.render()).join("\n");
    }
}


// Persistence 
interface Persistence {
    save(element: DocumentElement): void;
}

class SaveToFile implements Persistence {
    save(element: DocumentElement): void {
        const content = element.render();
        // Logic to save content to a file
        console.log(`Saving to file: ${content}`);
    }
}


// 
class DocumentEditor {
    private doc: Document;
    private ps: Persistence;

    constructor(doc: Document, ps: Persistence) {
        this.doc = doc;
        this.ps = ps;
    }

    addText(text: string) {
        this.doc.addElement(new TextElement(text));
    }

    addImage(src: string) {
        this.doc.addElement(new ImageElement(src));
    }

    save() {
        this.ps.save(this.doc);
    }

    render() {
        return this.doc.render();
    }
}


const docEditor = new DocumentEditor(new Document(), new SaveToFile());

docEditor.addText('Ram Ram');
docEditor.addImage('hello.png');
const docContent = docEditor.render();
console.log(docContent);

docEditor.save();


export {};