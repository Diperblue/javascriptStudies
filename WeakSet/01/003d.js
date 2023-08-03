let listeners = new WeakSet();

class EventEmitter {
  addListener(a) {
    listeners.add(a);
  }
  emit(b) {}
}

let a = new EventEmitter();
let log = [];

let aproxy = new Proxy(a, {
  get: function (target, property) {
    if (property === "addListener") {
      return function (listener) {
        log.push(listener); // Adiciona a função de ouvinte ao log
        target.addListener(listener); // Chama o método original no objeto EventEmitter
      };
    } else if (property === "emit") {
      return function () {
        console.log("[*] Checking logs...");
        for (const listener of log) {
          console.log(
            "[*] Checked: {" + listener + ":" + listeners.has(listener) + "}"
          );
        }
      };
    } else {
      return target[property];
    }
  },
});

let str = new String("teste");
aproxy.addListener(str);
console.log(log);
aproxy.emit("evento");
