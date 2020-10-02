AFRAME.registerComponent('paintings-loader', {
    paintingsData: {},
    paintingElement: undefined,
    detailOfPaintingElement: undefined,

    init() {
        fetch('../data/DE_MdbKL_946.json')
            .then(result => result.json())
            .then(json => this.paintingsData = json)
            .then(_ => this.paintingsData.forEach(it => this.buildPaintingEntity(it)));
    },

    buildPaintingEntity(paintingsData) {
        const paintingEntity = document.createElement('a-entity');
        paintingEntity.setAttribute('id', paintingsData.id);
        paintingEntity.setAttribute('position', '-0.325 2 -4.415');

        paintingEntity.append(this.buildPainting(paintingsData));
        paintingEntity.append(this.buildDetailOfPainting(paintingsData));

        document.getElementById('scene').appendChild(paintingEntity);
    },

    buildPainting(paintingsData) {
        // Das Gemälde mit Attributen als Element erzeugen.
        const paintingElement = document.createElement('a-image');
        paintingElement.setAttribute('class', 'painting');
        paintingElement.setAttribute('src', paintingsData.src);
        paintingElement.setAttribute('height', '2.98');
        paintingElement.setAttribute('width', '2');

        // Den Rahmen des Gemäldes mit Attributen erzeugen.
        const paintingFrameElement = document.createElement('a-box');
        paintingFrameElement.setAttribute('height', '3.13');
        paintingFrameElement.setAttribute('width', '2.15');
        paintingFrameElement.setAttribute('depth', '0.05');
        paintingFrameElement.setAttribute('color', '#694c25');
        paintingFrameElement.setAttribute('position', '0 0 -0.03');

        // Sphären der Detailbereiche mit Attributen erzeugen.
        const detailSphereElements = [];
        paintingsData.details.forEach(it => {
            const detailSphereElement = document.createElement('a-sphere');
            detailSphereElement.setAttribute('class', 'detail-' + it.id);
            detailSphereElement.setAttribute('position', it.position);
            detailSphereElement.setAttribute('radius', '0.1');
            detailSphereElement.setAttribute('color', 'blue');
            detailSphereElement.setAttribute('visible', 'false');
            detailSphereElement.setAttribute('visible', 'false');
            detailSphereElement.addEventListener('click', () => {
                paintingElement.setAttribute('src', it.src);
            });
            detailSphereElements.push(detailSphereElement);
        });

        paintingElement.appendChild(paintingFrameElement);
        detailSphereElements.forEach(it => paintingElement.appendChild(it));

        this.paintingElement = paintingElement;
        return paintingElement;
    },

    buildDetailOfPainting(paintingsData) {
        // Wrapper generieren und korrekt positionieren.
        const detailEntity = document.createElement('a-entity');
        detailEntity.setAttribute('class', 'detail');
        detailEntity.setAttribute('width', '1');
        detailEntity.setAttribute('height', '1');
        let x = this.paintingElement.getAttribute('position').x;
        x = parseFloat(this.paintingElement.getAttribute('width')) / 1.6 + x;
        let y = this.paintingElement.getAttribute('position').y;
        y = parseFloat(this.paintingElement.getAttribute('height')) / 2.1 + y;
        detailEntity.setAttribute('position', x + ' ' + y + ' 0');

        // Element für die Informationen generieren.
        const titleElement = document.createElement('a-text');
        titleElement.setAttribute('value', paintingsData.title);
        detailEntity.appendChild(titleElement);

        const dateElement = document.createElement('a-text');
        dateElement.setAttribute('value', 'Datierung: ' + paintingsData.dating);
        dateElement.setAttribute('position', '0 -0.3 0');
        detailEntity.appendChild(dateElement);

        const attributionElement = document.createElement('a-text');
        attributionElement.setAttribute('value', 'Zuschreibung: ' + paintingsData.attribution);
        attributionElement.setAttribute('position', '0 -0.6 0');
        detailEntity.appendChild(attributionElement);

        const supportElement = document.createElement('a-text');
        supportElement.setAttribute('value', 'Bildtraeger: ' + paintingsData.support);
        supportElement.setAttribute('position', '0 -0.9 0');
        detailEntity.appendChild(supportElement);

        // Wrapper für Button und Textinhalte generieren
        const buttonEntity = document.createElement('a-entity');
        buttonEntity.setAttribute('position', x / 1.6 + ' -1.4 0');
        buttonEntity.setAttribute('confirm-button', '');

        // Button für Interaktion generieren.
        const buttonElement = document.createElement('a-box');
        buttonElement.setAttribute('width', '1.5');
        buttonElement.setAttribute('height', '0.35');
        buttonElement.setAttribute('depth', '0.1');
        buttonEntity.appendChild(buttonElement);

        // Text für Button generieren.
        const buttonTextElement = document.createElement('a-text');
        buttonTextElement.setAttribute('position',  -(x / 1.85) + ' 0 0.05');
        buttonTextElement.setAttribute('color', 'black');
        buttonTextElement.setAttribute('value', 'Detailansicht');
        buttonEntity.appendChild(buttonTextElement);

        detailEntity.appendChild(buttonEntity);
        return detailEntity;
    }
});
