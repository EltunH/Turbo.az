const likeDiv = document.getElementById('likeDiv')
const openClose = document.getElementById('openClose')

let basket = JSON.parse(localStorage.getItem('basket')) || []

let flag = true

function likeOpen() {
    openClose.style.right = flag ? '0%' : '-100%'
    flag = !flag
}

function addBasket(id, price, model, brand, currency, images, e) {
    e.preventDefault()
    e.stopPropagation()
    copyData.find(item => {
        if(item.id == id) item.status = true
    })
    data.find(item => {
        if(item.id == id) item.status = true
    })
    const obj = { id, price, model, brand, currency, images, count: 1 };
    const yoxla = basket.find(item => item.id == id)
    if (yoxla == undefined) basket.push(obj)
    else yoxla.count += 1
    localStorage.setItem('basket', JSON.stringify(basket))
    showBasket()
    show()
}

showBasket()

function showBasket() {
    likeDiv.innerHTML = ''
    basket.map((item, i) => {
        likeDiv.innerHTML += `
                     <article class="flex flex-col rounded-[7px] bg-white mt-[10px]">
                        <div class="relative">
                            <img alt="car" class="object-cover w-full h-52 rounded-[8px_8px_0_0] dark:bg-gray-500"
                                src="${item.images}" />
                                <i onclick="favDelete(${item.id})" class="fa-solid fa-trash text-[#ca1016] absolute right-2 top-2 text-[22px] cursor-pointer"></i>
                        </div>
                        <div class="flex flex-col flex-1 p-3">
                            <h3 class="flex-1 pt-2 pb-[2px] text-[18px] font-[700] leading-snug">
                                <button onclick="changeCount(-1, ${i}, ${item.id})" class="px-3 bg-[#ca1016] text-white py-1 font-semibold w-[36px] mr-2 rounded">-</button>Say: ${item.count}
                                <button onclick="changeCount(1, ${i}, ${item.id})" class="px-3 mx-2 text-white bg-[#7ed321] w-[36px] py-1 font-semibold rounded">+</button>
                            </h3>
                            <h3 class="flex-1 pt-2 pb-[2px] text-[18px] font-[700] leading-snug">${item.price} ${item.currency}</h3>
                            <span class="text-[16px] capitalize hover: dark:text-default-600">${item.brand} ${item.model}</span>
                            </div>
                        </div>
                    </article>`
    })
}

function deleteAll() {
    data.forEach(item => item.status = false)
    localStorage.removeItem('basket')
    basket.length = 0
    likeDiv.innerHTML = ''
    show()
}

function favDelete(id) {
    const yeniArr = basket.filter(item => item.id !== id)
    basket = yeniArr
    data.filter(item => { if (id == item.id) item.status = false })
    localStorage.setItem('basket', JSON.stringify(yeniArr))
    showBasket()
    show()
}

function changeCount(deyisen, index, id) {
    const say = basket[index].count += deyisen
    if (say == 0) favDelete(id)
    showBasket()
}