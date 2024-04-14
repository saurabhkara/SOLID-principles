interface DocumentManager {
    openDocument(): void;
    closeDocument(): void;
    saveDocument(): void;
    scanDocument(): void;
}

// Segregate the Interface as we don't need scanDocument method in Basic Editor

interface IDocumentOpener {
    openDocument(): void
}

interface IDocumentCloser {
    closeDocument(): void
}

interface IDocumentSaver {
    saveDocument(): void
}

interface IDocumentScanner {
    scanDocument(): void
}



class BasicEditor implements IDocumentOpener, IDocumentCloser, IDocumentSaver {

    openDocument(): void {
        console.log('Document Opening');
    }
    closeDocument(): void {
        console.log('Document Closed')
    }

    saveDocument() {
        console.log('Document Svaing')
    }
}



class AdvanceEditor implements IDocumentCloser, IDocumentOpener, IDocumentSaver, IDocumentScanner {

    openDocument(): void {
        console.log('Document Opening');
    }
    closeDocument(): void {
        console.log('Document Closed')
    }
    saveDocument() {
        console.log('Document Svaing')
    }
    scanDocument(): void {
        console.log('Document Scanning')
    }
}