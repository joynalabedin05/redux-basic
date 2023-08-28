import {produce} from "immer";
const demonSlayer = [
    'tanjiro',
     'rengon',
      'tioro',
      'openai',
      'mitsuri',
      'shinobu',
    ]

    const nextState = produce(demonSlayer, (draft) => {
       draft.push('zenetsu') 
    });

    // console.log(nextState);
    // console.log(demonSlayer);