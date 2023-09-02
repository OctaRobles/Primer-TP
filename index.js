class ProductManager{
    #precioBaseDeGanancia = 4

    constructor(){
        this.cartulinas = []

    }

    agregarCartulina(nombre,descripcion,precio,img,id,stock){
        
        if(!nombre || !descripcion || !precio){
            return `Falta informacion`
        }
            const cartulina = {
        
                nombre,
                descripcion,
                precio,
                img,
                id:
                    this.cartulinas.length
                    ? this.cartulinas[this.cartulinas.length-1].id+1
                    :1,
                stock,
    }
    this.cartulinas.push(cartulina)
    }

    agregarCartulina(idCartulina,idUsuario){
        const cartulina = this.cartulinas.find(e=>e.id === idCartulina)
        if(!cartulina){
            return `Esta cartulina no existe`

        }
        if(cartulina.descripcion.includes(idUsuario)){
            return `Usuario ya registrado`
        }
        cartulina.descripcion.push(idUsuario)
    }


}