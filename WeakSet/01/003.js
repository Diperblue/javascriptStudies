let logAdd = [];
class EventEmitter {
  constructor() {
    this.listeners = new WeakSet();
  }
  addListener(listener) {
    this.listeners.add(listener);
  }
  emit(event) {
    for (var obj of logAdd) {
      if (obj == event) {
        console.log(`{ ${obj}: ${this.listeners.has(obj)} }`);
      }
    }
  }
}

let evento = new EventEmitter();

let eventoProxy = new Proxy(evento, {
  get: (o, propety) => {
    if (propety == "addListener") {
      return (listener) => {
        logAdd.push(listener); // mandando para o log
        evento.addListener(listener); // adicionando ao weakset
      };
    } else if (propety == "emit") {
      return (eventA) => {
        console.log("[*] Verificando logs...");
        evento.emit(eventA);
      };
    }
  },
});

/*

evento.addListener('a') => listeners {[ 'a' ]}
armazenamnto no log
evento.emit('a') => {'a':true}

*/

let str = new String("t");

eventoProxy.addListener(str);
eventoProxy.emit(str);
