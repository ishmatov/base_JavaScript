'use strict';

const settings = {
    rowCount: 8,
    colCount: 8,
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    figures: {
            K: ['E1', 'E8'],
            Q: ['D1', 'D8'],
            R: ['A1', 'H1', 'A8', 'H8'],
            N: ['B1', 'G1', 'B8', 'G8'],
            B: ['C1', 'F1', 'C8', 'F8'],
    },
};

const chessTable = {
    containerElement: null,
    cellElements: [],
    settings,
    colorClass: 'white',

    drawTable() {
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        let colorCell =  'white';
        for (let row = this.settings.rowCount; row > 0; row--) {
            (colorCell === 'black') ? colorCell = 'white' : colorCell = 'black';

            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                (colorCell === 'black') ? colorCell = 'white' : colorCell = 'black';
                cell.classList.add(colorCell);
                cell.classList.add(this.settings.letters[col] + (row));
                trElem.appendChild(cell);

                this.cellElements.push(cell);
            }
        }
    },

    initNumber() {
        const row = document.getElementsByTagName('tr');
        let numberRow = this.settings.rowCount;
        for (let i = 0; i < row.length; i++) {
            row[i].insertAdjacentHTML('afterbegin', `<td class="title">${numberRow}</td>`);
            row[i].insertAdjacentHTML('beforeend', `<td class="title">${numberRow}</td>`);
            numberRow--;
        }
    },

    initLetters() {
        const numTr = document.createElement('tr');
        const numTd = document.createElement('td');

        numTr.appendChild(numTd); // Добавляем первую пустую ячейку

        for(let i = 0; i < this.settings.letters.length; i++) {
            const newTd = document.createElement('td');
            newTd.innerText = this.settings.letters[i];
            numTr.appendChild(newTd);
        }

        numTr.appendChild(numTd.cloneNode(true)); // Добавляем последнюю пустую ячейку

        this.containerElement.insertAdjacentHTML('afterbegin', numTr.outerHTML);
        this.containerElement.appendChild(numTr);
    },

    initFigures() {
        const keys = Object.keys(this.settings.figures);
        for (let i = 0; i < keys.length; i++) {
            let figure = keys[i];
            for(let j = 0; j < this.settings.figures[keys[i]].length; j++) {
                let classTr = this.settings.figures[keys[i]][j];
                const cell = document.getElementsByClassName(classTr);
                cell[0].textContent = figure;
            }
        }
        const pawn = document.querySelectorAll('[class*="7"], [class*="2"]');
        for(let val of pawn) {
            val.textContent = 'P';
        }

        const whiteFigure = document.querySelectorAll('[class*="1"], [class*="2"]');
        whiteFigure.forEach(item => item.classList.add('whiteFigure'));

        const blackFigure = document.querySelectorAll('[class*="7"], [class*="8"]');
        blackFigure.forEach(item => item.classList.add('blackFigure'));
    },

    init () {
        this.containerElement = document.querySelector('#chessTable');
        this.drawTable();
        this.initNumber();
        this.initLetters();
        this.initFigures();
    }
}

chessTable.init();