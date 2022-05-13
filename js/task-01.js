

// const refs = {
//    allItemsEl: document.querySelectorAll('.item'),
//    titleEl: document.querySelectorAll('h2')
// }


// console.log(`Number of categories: ${refs.allItemsEl.length}`)




// refs.allItemsEl.forEach(allItems => {
//    const title = refs.titleEl.textContent;
//    console.log(`Category: ${title}`)

//    const listEl = allItems.lastElementChild.children.length;
//    console.log(`Elements: ${listEl}`)
// })


const categories = document.querySelector('#categories');


console.log(`Number of categories: ${categories.children.length}`)

const itemEl = [...categories.children]

const result = itemEl.map(item => {
   console.log(`Category: ${item.querySelector("h2").textContent}`)
   console.log(`Elements: ${item.querySelector("ul").children.length}`)
})