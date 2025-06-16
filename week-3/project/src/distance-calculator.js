'use strict';

// Planet distances from the sun in AU 
const planetDistancesAU = {
    Mercury: 0.39,
    Venus: 0.72,
    Earth: 1.00,
    Mars: 1.52,
    Jupiter: 5.20,
    Saturn: 9.58,
    Uranus: 19.20,
    Neptune: 30.50
};

/**
 * Calculates distance between two planets in AU
 * @param {string} planet1
 * @param {string} planet2
 * @returns {number}
 */
export function calculateDistance(planet1, planet2) {
    const d1 = planetDistancesAU[planet1];
    const d2 = planetDistancesAU[planet2];

    if (d1 === undefined || d2 === undefined) {
        throw new Error('Invalid planet name');
    }

    return Math.abs(d1-d2);
}