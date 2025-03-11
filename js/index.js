const content = document.getElementById('content')
const marka = document.getElementById('marka')
const city = document.getElementById('city')
const banType = document.getElementById('banType')
const yearMin = document.getElementById('yearMin')
const yearMax = document.getElementById('yearMax')
const btnArtir = document.getElementById('btnArtir')
const select = document.querySelectorAll('#selects select')
const valyuta = document.getElementById('valyuta')
const toRed = document.getElementById('toRed')

let markaArr = [...(new Set(data.map(item => item.brand)))]
let modelArr = [...(new Set(data.map(item => item.model)))]
let cityArr = [...(new Set(data.map(item => item.city)))]
let banTypeArr = [...(new Set(data.map(item => item.banType)))]
let yearArr = [...(new Set(data.map(item => item.year)))].sort((a, b) => b - a)

data = JSON.parse(localStorage.getItem('data')) || data

data.forEach(item => {
    let statCount = 0
    basket.forEach(stat => item.id == stat.id ? statCount++ : statCount)
    if (statCount == 1) item.status = true
})

let count = 8
function show() {
    content.innerHTML = ''
    if (data.length > 0) {
        data
            .slice(0, count)
            .map((item, i) => {
                content.innerHTML += `
                        <a target="_blank" href="pages/details.htm?id=${item.id}">
                            <article class="flex flex-col cursor-pointer shadow-[0_17px_34px_0_rgba(44,39,56,0.04),_0_8px_17px_0_rgba(44,39,56,0.02)] hover:shadow-[0_4px_8px_0_rgba(177,181,199,0.48)] transition duration-300 rounded-[7px] bg-white">
                                <div class="relative">
                                    <img alt="car" class="object-cover w-full h-52 rounded-[8px_8px_0_0] dark:bg-gray-500"
                                        src="${item.images[0]}" />
                                        <i onclick="addBasket( ${item.id}, ${item.price}, '${item.model}', '${item.brand}', '${item.currency}', '${item.images[0]}', event)" class="fa-regular fa-heart ${item.status == false ? 'text-white' : 'text-[#ca1016]'} absolute right-2 top-2 text-[22px] cursor-pointer"></i>
                                </div>
                                <div class="flex flex-col flex-1 p-3">
                                    <h3 class="flex-1 pt-2 pb-[2px] text-[18px] font-[700] leading-snug">${item.price} ${item.currency}</h3>
                                    <span class="text-[16px] capitalize hover: dark:text-default-600">${item.brand} ${item.model}</span>
                                    <span class="text-[16px] hover: dark:text-default-600">${item.year}, ${item.engine} L, ${item.odometer} ${item.odometerUnit}</span>
                                    <div class="flex flex-wrap text-[14px] justify-between pt-1 space-x-2 text-sm text-gray-600">
                                        <span class="text-[#8d94ad]">${item.city}, ${item.dates}</span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    `
            })
    } else {
        handleError()
        btnArtir.style.display = 'none'
    }
}
show()

const div = document.querySelectorAll('#toRed div')
function bgRed(x) {
    bgRedReset()
    x.style.background = '#CA1016'
    x.style.color = '#fff'
}

function bgRedReset() {
    div.forEach(item => {
        item.style.background = '#fff'
        item.style.color = '#8D94AD'
    })
}

function artir() {
    if (count < data.length) {
        count += 8
        show()
    }
    if (count > data.length) btnArtir.style.display = 'none'
}

function handleSelect() {
    markaArr.map(item => {
        marka.innerHTML += `<option>${item}</option>`
    })
    modelArr.map(item => {
        model.innerHTML += `<option>${item}</option>`
    })
    cityArr.map(item => {
        city.innerHTML += `<option>${item}</option>`
    })
    banTypeArr.map(item => {
        banType.innerHTML += `<option>${item}</option>`
    })
    yearArr.map(item => {
        yearMax.innerHTML += `<option>${item}</option>`
        yearMin.innerHTML += `<option>${item}</option>`
    })
}
handleSelect()


function filtr(axtar, select) {
    count = 8
    btnArtir.style.display = 'flex'
    const yeniArr = copyData.filter(item => item[axtar] == select.value)
    data = yeniArr
    show()
}

function sifirla() {
    const select = document.querySelectorAll('#selects select')
    select.forEach(item => item.value = "")
    bgRedReset()
    div[0].style.background = '#CA1016'
    div[0].style.color = '#fff'
    data = copyData
    count = 8
    show()
    btnArtir.style.display = 'flex'
}

function etrafliAxtaris() {
    const marka = select[0].value
    const model = select[1].value
    const city = select[2].value
    const etrafliArray = copyData.filter(item => item.brand == marka && item.model == model && item.city == city)
    data = etrafliArray
    show()
}


