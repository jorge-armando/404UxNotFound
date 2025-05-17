class App {
    actions = {}

    addAction(name, func) {
        this.actions[name] = func;
    }

    run(name){
        if(this.actions[name]) {
            this.actions[name]();
        }
    }
}

let app = new App();