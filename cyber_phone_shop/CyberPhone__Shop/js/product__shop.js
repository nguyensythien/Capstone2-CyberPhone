class Products{
    constructor(id, name, price, screen, backCamera, frontCamera, img, desc, type)
    {
        this.id = id,
        this.name = name,
        this.price = price,
        this.screen = screen,
        this.backCamera = backCamera,
        this.frontCamera = frontCamera,
        this.img = img,
        this.desc =desc,
        this.type = type
    }
}
class cartItem{
    constructor(id, img, name, price, quantity)
    {   
        this.id = +id,
        this.img = img,
        this.name = name,
        this.price = +price,
        this.quantity = +quantity
    }
    totalPrice(){
        return this.price * this.quantity;
    }
}
export class Cart{
    constructor(){
        this.items = [];
    }
    add(id, img, name, price, quantity){
        var index = this.items.findIndex((item) => item.id === +id);
        if(index === -1){
            var item = new cartItem(id, img, name, price, quantity);
            this.cost = +price;
            this.items.push(item);
        }
        else{
            let number = this.items.find((item) => item.id === +id).quantity;
            this.items.find((item) => item.id === +id).quantity = number + 1;
        }
    }
    remove(_id){
        var index = this.items.findIndex((item) => item.id === _id);
        this.items.splice(index, 1);
    }
    adjust(_id, _trend){
        var number = this.items.find((item) => item.id === _id).quantity;
        if(_trend === "+"){
            ++number;
            this.items.find((item) => item.id === _id).quantity = number;
        }
        else{
            if(number > 1){
                --number;
                this.items.find((item) => item.id === _id).quantity = number;
            }
            else this.remove(_id);
        }
    }
    clear(){
        this.items = [];
    }
}
export {cartItem}
export default Products
