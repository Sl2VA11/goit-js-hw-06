const counterValue = function ({ selector, inititalValue = 0, step = 1, } = {}) {
    this._value = inititalValue;
    this._step = step;
    
    this._refs = this._getRefs(selector);
    this._bindEvents();
    this.updateValueUI();
};

counterValue.prototype._getRefs = function (selector) {
    const refs = {};
    refs.container = document.querySelector(selector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');

    return refs;
};

counterValue.prototype.increment = function () {
    this._value += this._step;
};

counterValue.prototype.decrement = function () {
    this._value -= this._step;
};

counterValue.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value;
};

counterValue.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    });
    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    })
};

new counterValue({ selector: '#counter', step: 1, inititalValue: 0 });