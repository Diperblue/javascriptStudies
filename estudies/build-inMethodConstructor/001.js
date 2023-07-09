class car {
    constructor(model, year, description){
        this.model = model
        this.year = year
        this.description = description
        this.wModel = () => console.log(this.model)
    }
}

carro1 = new car('01', 2007,"MMEEEE")
carro1.wModel()