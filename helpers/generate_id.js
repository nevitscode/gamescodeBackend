const helpers = {};

helpers.randomNumber = () => {
    const posible = 'abcdefghijklmnopqrstuvwxyz0123456789_-';
    let randomNumber = 0;
    for (let i = 0; i < 6; i++) {
        randomNumber += posible.charAt(Math.floor(Math.random() * posible.length));
    }
    return randomNumber;
}

module.exports = helpers;