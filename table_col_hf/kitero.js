const szam = 6;
valami1();
valami2();
valami3();

const opsum = valami4(2);
console.log(opsum);

/**
 * kiír egy stringet
 * 
 * @returns {void}
 */
function valami1() {
    console.log("sima string");
}

/**
 * kiírja a szam globális változót
 * 
 * @returns {void}
 */
function valami2() {
    console.log(szam);
}

/**
 * kiírja a lokális változót
 * 
 * @returns {void}
 */

function valami3() {
    const d = 9;
    console.log(d);
}

/**
 * 
 * @param {number} param1 - ez a bemeneti paraméter
 * @returns {number}
 */

function valami4(param1) {
    const e = 6;
    const f = param1 + e;

    return f;
}