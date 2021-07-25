
const itemEl = document.querySelectorAll('.item')
console.log(itemEl);
console.log(`В списке ${itemEl.length} категории.`);


for (const item of itemEl) {
    const itemTitle = item.querySelector('h2').textContent

    console.log(`Категория: ${itemTitle}`);

    const listEl = item.querySelector('ul')

    const listItemEl = listEl.querySelectorAll('li').length


    console.log(`Количество элементов: ${listItemEl}`);

}
