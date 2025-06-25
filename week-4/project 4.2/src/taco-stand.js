'use strict';

import {EventEmitter} from 'events';

export class TacoStandEmitter extends EventEmitter {
    serveCustomer(customer){
        this.emit('serve', customer);
    }

    prepareTaco(taco){
        this.emit('prepare', taco);
    }

    handleRush(rush) {
        this.emit('rush', rush);
   }
}