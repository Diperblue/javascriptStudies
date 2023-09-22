class person {
    _value = 2
    gpg = Symbol.for('IFcZbW37sPFgM4fhrZheW88wN')
    constructor(name) {
        this.name = name
    }
    get value() {
        return this._value
    }
    set value(key) {
        if(key !== gpg) throw new Error('Falha na indentificação')
    }
}

console.dir(new person('teste'))