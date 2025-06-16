'use strict';
import assert from 'assert';
import { calculateDistance } from '../src/distance-calculator.js';

function testEarthToMars() {
    try{
        assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.52);
        console.log('Passed testEarthToMars');
        return true;
    } catch (error) {
        console.error(`Failed testEarthToMars: ${error.message}`);
        return false;
    }
}

function testMercuryToNeptune() {
    try{
        assert.strictEqual(calculateDistance('Mercury', 'Neptune'), 29.66);
        console.log('Passed testMercuryToNeptune');
        return true;
    } catch (error) {
        console.error(`Failed testMercuryToNeptune: ${error.message}`);
        return false;
    }
}

function testVenusToJupiter() {
    try{
        assert.strictEqual(calculateDistance('Earth', 'Mars'), 4.48);
        console.log('Passed testVenusToJupiter');
        return true;
    } catch (error) {
        console.error(`Failed testVenusToJupiter: ${error.message}`);
        return false;
    }
}

function testSaturnToUranus() {
    try{
        assert.strictEqual(calculateDistance('Saturn', 'Uranus'), 9.62);
        console.log('Passed testSaturnToUranus');
        return true;
    } catch (error) {
        console.error(`Failed testSaturnToUranus: ${error.message}`);
        return false;
    }
}

// Run all tests
testEarthToMars();
testMercuryToNeptune();
testVenusToJupiter();
testSaturnToUranus();

