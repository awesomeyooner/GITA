class Heap{

    constructor(maxSize){
        this.items = new Array(maxSize);

        this.currentItemCount = 0;
    }

    /**
     * 
     * @param {HeapEntity} item 
     */
    add(item){
        item.heapIndex = this.currentItemCount;

        this.items[this.currentItemCount] = item;

        this.sortUp(item);

        this.currentItemCount++;
    }

    /**
     * Removes the first item and returns it
     * @returns The first item
     */
    removeFirst(){
        var firstItem = this.items.at(0);

        this.currentItemCount--;

        this.items[0] = this.items.at(this.currentItemCount);
        this.items[0].heapIndex = 0;

        this.sortDown(this.items.at(0));

        return firstItem;
    }

    /**
     * 
     * @param {HeapEntity} item 
     */
    updateItem(item){
        this.sortUp(item);
    }

    /**
     * Gets if the given item is in the heap
     * @param {HeapEntity} item 
     */
    contains(item){
        if(item.heapIndex > this.currentItemCount - 1)
            return false;

        return this.items.at(item.heapIndex).equals(item);
    }

    /**
     * 
     * @param {HeapEntity} item 
     */
    sortUp(item){
        var parentIndex = (item.heapIndex - 1) / 2;
        
        while(true){
            var parent = this.items.at(parentIndex);

            if(item.compareTo(parent) > 0)
                this.swap(item, parent);
            else
                break;

            parentIndex = (item.heapIndex - 1) / 2;
        }
    }

    /**
     * 
     * @param {HeapEntity} item 
     */
    sortDown(item){
        while(true){
            var childIndexLeft = (item.heapIndex * 2) + 1;
            var childIndexRight = (item.heapIndex * 2) + 2;
            var swapIndex = 0;

            if(childIndexLeft < this.currentItemCount){
                swapIndex = childIndexLeft;

                if(childIndexRight < this.currentItemCount){
                    if(this.items.at(childIndexLeft).compareTo(this.items.at(childIndexRight)) < 0)
                        swapIndex = childIndexRight;
                }

                if(item.compareTo(this.items.at(swapIndex)) < 0)
                    this.swap(item, this.items.at(swapIndex));
                else
                    return;
            }   
            else
                return;
        }
    }

    /**
     * 
     * @param {HeapEntity} itemA 
     * @param {HeapEntity} itemB 
     */
    swap(itemA, itemB){
        this.items[itemA.heapIndex] = itemB;
        this.items[itemB.heapIndex] = itemA;
        
        var itemAIndex = itemA.heapIndex;
        var itemBIndex = itemB.heapIndex;

        itemA.heapIndex = itemBIndex;
        itemB.heapIndex = itemAIndex;
    }
}
