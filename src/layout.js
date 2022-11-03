import { doc } from "prettier";

// make dom element
export class Element {
    constructor(type, c = 0, children = null, id = 0) {
        this.type = type;
        this.c = c;
        this.children = children;
        this.id = id;

    }
    getDOM() {
        const e = document.createElement(this.type);
        e.classList.add(this.c);
        e.id = this.id;
        if(this.children != null) {
            this.children.forEach(child => {
                e.appendChild(child);
            });
        }
        return e;
    }
}

export class Layout {
    // add content setter
    constructor(content) {
        this.content = content;
    }

    setContent(content) {
        this.content = content;
    }

    setDOM() {
        // setting body
        const body = document.body;
        
        // setting header, search, and footer children
        const title = document.createElement('h2');
        title.textContent = '🧮 Analysistant';

        const gh = document.createElement('button');
        gh.textContent = 'GITHUB'
        gh.onclick = function() {
            console.log('clicked');
            window.location.href = "https://github.com/TannerHornsby7/Analysistant";
        };
        
        const s = new Element('div', 'searchsect')
        const search_bar = document.createElement('input');
        const search_btn = document.createElement('button');
        search_btn.textContent = 'SEARCH 🔍'
        search_bar.placeholder = 'Paste Your Question Here!'

        const search_sect = s.getDOM();
        search_sect.appendChild(search_bar);
        search_sect.appendChild(search_btn);

        const bottag = document.createElement('h6');
        bottag.textContent = 'Tanner Hornsby';

        // creating header and footer objs
        const header = new Element('div', 'header', [title, gh]);
        const footer = new Element('div', 'footer', [bottag]);

        // placeholder div
        const pholder = document.createElement('div');
        pholder.textContent = '';

        // setting DOM
        body.appendChild(header.getDOM());
        body.appendChild(search_sect);
        (this.content == null) ? body.appendChild(pholder) : body.appendChild(this.content);
        body.appendChild(footer.getDOM());
    }
}