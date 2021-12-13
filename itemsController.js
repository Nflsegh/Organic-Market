class ItemController{
    constructor(currentID =0){
        this.currentID = this.currentID;
        this.itemArray = [];
    }
    addItem(itemamt, price, name){
        let newItem = {
           
            id: this.currentID++,
            itemamt,
            name,
            price
        }
        this.itemArray.push(newItem);

    }

}