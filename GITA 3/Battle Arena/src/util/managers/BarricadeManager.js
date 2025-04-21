class BarricadeManager{

    static instance = new BarricadeManager();

    constructor(maxBarricades = 100){

    }

    static getInstance(){
        return this.instance;
    }
}