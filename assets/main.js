
let productsItem = document.querySelector('.products');
let megaMenu = document.querySelector('.mega-menu')
productsItem.addEventListener('mouseover', () => {
    productsItem.style.setProperty('--opacity', '1');
    productsItem.style.setProperty('--visibility', 'visible');
    megaMenu.style.setProperty('--opacity', '1');
    megaMenu.style.setProperty('--visibility', 'visible');
})

productsItem.addEventListener('mouseout', () => {
    productsItem.style.setProperty('--opacity', '0');
    productsItem.style.setProperty('--visibility', 'hidden');
    megaMenu.style.setProperty('--opacity', '0');
    megaMenu.style.setProperty('--visibility', 'hidden');
})