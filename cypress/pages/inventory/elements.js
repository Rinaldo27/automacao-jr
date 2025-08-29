
export const el = {
    addToCart: (itemName) => `[data-test="add-to-cart-${transformaTexto(itemName)}"]`

}

function transformaTexto(texto) {
    return texto.toLowerCase().replace(/[^a-z0-9]/g, '-')

}