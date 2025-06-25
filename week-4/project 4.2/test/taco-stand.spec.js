'use strict'

import assert from 'assert';
import { TacoStandEmitter } from '../src/taco-stand.js';

function testServeCustomer() {
    try {
        const stand = new TacoStandEmitter();
            const expected = 'Ana';

            stand.on('serve', customer => {
                assert.strictEqual(customer,expected);
            });

            stand.serveCustomer(expected);
            console.log('Passed testServeCustomer');
            return true;
    } catch (err) {
        console.error(`failed testServeCustomer: ${err}`);
        return false;
    }
}

function testPrepareTaco() {
    try {
        const stand = new TacoStandEmitter();
        const expected = 'Al Pastor';

        stand.on('prepare', taco => {
            assert.strictEqual(taco, expected);
        });

        stand.prepareTaco(expected);
        console.log('Passed testPrepareTaco');
        return true;
    } catch (err) {
        console.error(`Failed testPrepareTaco: ${err}`);
        return false;
    }
}

function testHandleRush(){
    try {
        const stand = new TacoStandEmitter();
        const expected = 'eventing Rush';

        stand.on('rush', rush => {
            assert.strictEqual(rush, expected);
        });

        stand.handleRush(expected);
        console.log('Passed testHandleRush');
        return true;
    } catch (err) {
        console.error(`Failed testHandleRush: ${err}`);
        return false;
    } 
}

testServeCustomer();
testPrepareTaco();
testHandleRush();