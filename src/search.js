import "./style.scss";

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

// url aliases
const a_urls = [
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
        if (s_urls[s].includes(terms[term]) && terms_hash[terms[term]].includes(a_urls[s]) == 0) {
            terms_hash[terms[term]].push(a_urls[s]);
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
            const d_key = terms_hash[words[word]][url];
            if (used_terms.includes(d_key) == false) {
                // collect reused definitions
                used_terms.push(d_key);            
                // add node to definitions node list
                definitions.push(d_key);
            }
        }
    }
    return definitions;
}