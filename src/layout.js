import { doc } from "prettier";
import { search } from "./search";
import "./style.scss";
import dele from './assets/del.png';
import flag from './assets/flag.png';
import accumulation_point from './assets/chapter3/accumulation_point.png';
import bolzano_weierstrass from './assets/chapter3/bolzano-weierstrass.png';
import boundary_point from './assets/chapter3/boundary_point.png';
import boundary from './assets/chapter3/boundary.png';
import bounded_metric_space from './assets/chapter3/bounded-metric-space.png';
import cauchy_sequence_metric_space from './assets/chapter3/cauchy_sequence-metric-space.png';
import closed_convex_hull from './assets/chapter3/closed_convex_hull.png';
import closed_set_metric_space from './assets/chapter3/closed_set-metric-space.png';
import closure from './assets/chapter3/closure.png';
import complete_metric_space from './assets/chapter3/complete_metric_space.png';
import complete_metric_spaces_theorem from './assets/chapter3/complete_metric_spaces-theorem.png';
import continuous_at_point_x from './assets/chapter3/continuous_at_point_x.png';
import continuous_functions_metric_spaces from './assets/chapter3/continuous_functions_metric_spaces.png';
import converge_uniformly from './assets/chapter3/converge_uniformly.png';
import convex_hull from './assets/chapter3/convex_hull.png';
import convex from './assets/chapter3/convex.png';
import diameter from './assets/chapter3/diameter.png';
import holders_inequality from './assets/chapter3/holders_inequality.png';
import interior from './assets/chapter3/interior.png';
import isolated_point from './assets/chapter3/isolated_point.png';
import limit from './assets/chapter3/limit.png';
import metric_space_notation1 from './assets/chapter3/metric_space-notation1.png';
import metric_space from './assets/chapter3/metric_space.png';
import open_ball_metric_space from './assets/chapter3/open_ball-metric-space.png';
import open_set_metric_space from './assets/chapter3/open_set-metric-space.png';
import pointwise_limit from './assets/chapter3/pointwise_limit.png';
import unit_ball from './assets/chapter3/unit_ball.png';
import { Element } from './layout'

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

export class Definition extends Element {
    
    constructor(def_img, id) {
        const fla = document.createElement('img');
        fla.src = flag;
        fla.title = 'Flag This Definition';
        fla.classList.add('flag')
        fla.id = id;

        const def = document.createElement('img');
        def.src = def_img;

        const del = document.createElement('img');
        del.src = dele;
        del.title = 'Remove This Definition';
        del.classList.add('delete');
        del.id = id;

        this.type = 'div';
        this.c = 'definition';
        this.children = [fla, def, del];
        this.id = id;
    }
}

export class Layout {
    // add content setter
    constructor(definitions = []) {
        child_nodes = [];
        for(let i = 0; i < definitions.length; i++){
            const def = new Definition(definitions[i], i);
            child_nodes.push(def);
        }
        this.content = new Element('div', 'definitions', child_nodes);
        this.definitions = definitions;
    }


    setContent(definitions = []) {
        child_nodes = [];
        for(let i = 0; i < definitions.length; i++){
            const def = new Definition(definitions[i], i);
            child_nodes.push(def.getDOM());
        }
        this.content = new Element('div', 'definitions', child_nodes);
        this.definitions = definitions;
    }


    resetDOM() {
        document.body.textContent = '';
    }


    setDOMEvents(){
        // add flagging event
        const flags = document.querySelectorAll('flag');
        flags.forEach((flag) => {
            flag.addEventListener('click', ()=>{
                this.definitions.unshift(this.definitions[flag.id]);
                this.resetDOM();
                this.setDOM();
                this.setDOMEvents();
            });
        });

        // add deletion event
        const dels = document.querySelectorAll('flag');
        dels.forEach((del) => {
            del.addEventListener('click', ()=>{
                this.definitions[del.id].remove();
                this.resetDOM();
                this.setDOM();
                this.setEvents();
            });
        });       
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
        const cta = document.createElement('h3');
        cta.textContent = 'Enter Your Question Below, We will search for the ' +
        'relevant definitions that can help with your proof!';
        search_btn.id = 'search_btn';

        // search set up
        const search_bar = document.createElement('input');
        const search_btn = document.createElement('button');

        // adding search event listener
        function commence_search() {
            const def_urls = search(search_bar.value);

            for(const i in def_urls) {
                
            }
            const question = document.getElementById('question');
            question.textContent = 'Question: ' + search_bar.value;
        };

        search_btn.onclick = commence_search;
        search_bar.addEventListener("keydown", function (e) {
            if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                commence_search();
            }
        });

        search_btn.textContent = 'SEARCH 🔍'
        search_bar.placeholder = 'Paste Your Question Here!'
        const searchit = new Element('div', 'searchsect', [search_bar, search_btn])
        const q = document.createElement('h3');
        q.id = 'question';
        q.textContent = '';

        const s = new Element('div', 'hero', [cta, searchit.getDOM(), q]);
        const search_sect = s.getDOM();

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