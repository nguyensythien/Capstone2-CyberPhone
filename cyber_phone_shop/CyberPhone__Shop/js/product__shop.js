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
    constructor(id, img, name, price)
    {   
        this.id = id,
        this.img = img,
        this.name = name,
        this.price = price
    }
}
export {cartItem}
export default Products
