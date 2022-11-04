import "./style.scss";
import del from './assets/del.png';
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

// term collection
const terms = [
    'accumulation',
    'point',
    'bolzano',
    'weierstrass',
    'boundary',
    'point',
    'bounded',
    'metric',
    'space',
    'cauchy',
    'sequence',
    'closed',
    'convex',
    'hull',
    'closed',
    'closure',
    'complete',
    'continuous',
    'point',
    'spaces',
    'uniformly',
    'converges',
    'diameter',
    'holders',
    'inequality',
    'interior',
    'isolated',
    'point',
    'limit',
    'open',
    'ball',
    'set',
    'pointwise',
    'unit'
];

// keys to urls
const k_urls = [
    accumulation_point,
    bolzano_weierstrass,
    boundary_point,
    boundary,
    bounded_metric_space,
    cauchy_sequence_metric_space,
    closed_convex_hull,
    closed_set_metric_space,
    closure,
    complete_metric_space,
    complete_metric_spaces_theorem,
    continuous_at_point_x,
    continuous_functions_metric_spaces,
    converge_uniformly,
    convex_hull,
    convex,
    diameter,
    holders_inequality,
    interior,
    isolated_point,
    limit,
    metric_space_notation1,
    metric_space,
    open_ball_metric_space,
    open_set_metric_space,
    pointwise_limit,
    unit_ball
];

// url strings
const s_urls = [
    'accumulation_point',
    'bolzano_weierstrass',
    'boundary_point',
    'boundary',
    'bounded_metric_space',
    'cauchy_sequence_metric_space',
    'closed_convex_hull',
    'closed_set_metric_space',
    'closure',
    'complete_metric_space',
    'complete_metric_spaces_theorem',
    'continuous_at_point_x',
    'continuous_functions_metric_spaces',
    'converge_uniformly',
    'convex_hull',
    'convex',
    'diameter',
    'holders_inequality',
    'interior',
    'isolated_point',
    'limit',
    'metric_space_notation1',
    'metric_space',
    'open_ball_metric_space',
    'open_set_metric_space',
    'pointwise_limit',
    'unit_ball'
]

// term hash
var terms_hash = {};

// hash map array creator
for (const term in terms) {
    terms_hash[terms[term]] = [];
}

// hash map array populator
for (const term in terms) {
    for (const s in s_urls){
        if (s_urls[s].includes(terms[term]) && terms_hash[terms[term]].includes(k_urls[s]) == 0) {
            terms_hash[terms[term]].push(k_urls[s]);
            // console.log(s_urls[s]);
        }
    }
}

// search function
export function search(words) {
    words = words.split(" ");
    for (word in words) {
        words[word] = words[word].toLowerCase();
    }
    let definitions = []
    let used_terms = []
    for (var word in words) {
        for(const url in terms_hash[words[word]]) {
            const def = document.createElement('img');
            const d_key = terms_hash[words[word]][url];
            def.classList.add('definition');
            if (used_terms.includes(d_key) == false) {
                // collect reused definitions
                used_terms.push(d_key);
                def.src = d_key;
                def.id = d_key; // change id's to be

                // add deletion functionality
                const dele = document.createElement('img');
                dele.src = del;
                dele.title = 'Remove This Definition';
                dele.classList.add('delete');
                dele.id = d_key;
                dele.addEventListener('click', ()=>{
                    const def_to_del = document.getElementById(d_key);
                    console.log(def_to_del)
                    def_to_del.remove();
                });
                
                // add flagging functionality
                const fla = document.createElement('img');
                fla.src = flag;
                fla.title = 'Flag This Definition';
                fla.classList.add('flag')
                fla.id = d_key;
                const def_sect = new Element('div', 'def_sect', [fla, def, dele]);
                const def_section = def_sect.getDOM();
                def_section.id = d_key;
            
                // add node to definitions node list
                definitions.push(def_section);
            }
        }
    }
    return definitions;
}