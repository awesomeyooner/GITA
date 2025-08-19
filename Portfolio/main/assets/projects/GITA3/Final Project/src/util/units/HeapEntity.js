class HeapEntity extends Entity{

    constructor(size = 40, x = 0, y = 0, isActive = true, speed = 1, maxHealth = 1, color = "blue"){
        super(
            size,
            x,
            y,
            isActive,
            speed,
            maxHealth,
            color
        );

        this.heapIndex = 0;
    }

    compareTo(other){
        return 0;
    }

    equals(other){
        return false;
    }
}