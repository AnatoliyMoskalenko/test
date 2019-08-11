class Options {
    constructor(height = '50px', width = '80%', bg = 'green', fontSize = '22px', textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDiv(text) {
        let div = document.createElement('div');
        div.innerText = text;
        div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        document.body.appendChild(div);
    }
}

const created = new Options('100px', '300px', 'yellow', '30px', 'center');
created.newDiv('Текст внутри блока');