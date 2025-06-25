'use strict'

import { TacoStandEmitter } from './taco-stand.js';

const args = process.argv.slice(2);
const command = args[0];
const input = args.slice(1).join('');

const stand = new TacoStandEmitter();

stand.on('serve', customer => {
     console.log(`Serving ${customer}`);
    });

stand.on('prepare', taco => {
     console.log(`preparing ${taco}`);
    });

stand.on(`rush`, rush => {
     console.log(`rush hour: ${rush}`);
    });

    switch (command) {
        case 'serve':
           stand.serveCustomer(input);
           break;
        case 'prepare':
           stand.prepareTaco(input);
           break;
        case 'rush':
            stand.handleRush(input);
            break;
        default:
            console.log(`Unknown command: ${command}`);
    }