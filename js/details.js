const detailsMain = document.getElementById('detailsMain')

let params = new URLSearchParams(location.search)
let id = params.get('id')

const tapdigim = [data.find(item => item.id == id)]

if (tapdigim[0]) {
    showDetails()
}else {
    handleError()
}

function showDetails() {
    tapdigim.map((item, i) => {
        let deyisen = item.currency == 'AZN' ? '' : `≈ ${(item.price * 1.7).toFixed()} AZN`
        detailsMain.innerHTML = `
                <div class="bg-white">
                    <div class="max-w-[1000px] m-auto ">
                        <div class="container m-auto px-3 flex py-4 text-[16px] items-center">
                            <a href="#" class="underline pr-[10px]">${item.brand}</a>
                            <div class="w-[3px] h-[3px] rounded-[50%] bg-[#8d94ad]"></div>
                            <a href="#" class="underline px-[10px]">${item.model}</a>
                            <div class="w-[3px] h-[3px] rounded-[50%] bg-[#8d94ad]"></div>
                            <span class="text-[15px] pl-[10px]">Elan № 8568973</span>
                        </div>
                    </div>

                    <hr />

                    <div class="max-w-[1000px] m-auto ">
                        <div class="container m-auto px-3">
                            <div class="flex justify-between items-center flex-col py-[12px] md:flex-row">
                                <span class="text-[#212c3a] text-[19px] font-[700] tablet:text-[24px]">${item.brand} ${item.model}, ${item.engine} L, ${item.year} il, ${item.odometer} ${item.odometerUnit}</span>
                                <div class="flex items-center gap-5">
                                    <a onclick="addBasket( ${item.id}, ${item.price}, '${item.model}', '${item.brand}', '${item.currency}', '${item.images[0]}', event)" href="#"  class="flex gap-[5px] ${item.status == false ? 'text-black' : 'text-[#ca1016]'} items-center text-[15px] hover:text-[#ca1016]">
                                        <i class="fa-regular fa-heart text-[20px]"></i> Seçilmişlərdə saxla
                                    </a>
                                    <a href="#" class="flex gap-[5px] items-center text-[15px] hover:text-[#ca1016]">
                                        <i class="fa-regular fa-flag text-[20px]"></i> Şikayət et
                                    </a>
                                </div>
                            </div>
                            <div class="flex flex-col items-center md:items-start gap-4 md:flex-row justify-between pb-5">
                                <img class="rounded-[7px] md:max-w-[540px] md:max-h-[380px] tablet:max-w-[640px] tablet:max-h-[480px] w-[100%] h-[100%]" src="${item.images[0]}" alt="${item.brand}">
                                <div class="md:max-w-[300px] w-[100%]">
                                    <div class="bg-[#f6f7fa] rounded-[7px] p-5">
                                        <p class="text-[22px] font-[700]">${item.price} ${item.currency}</p>
                                        <p id="valyuta" class="mt-[10px]">${deyisen} </p>
                                        <div class="w-[64px] bg-white my-[15px] flex items-center p-1 rounded gap-1">
                                            <i class="fa-solid fa-repeat text-[#76c81c]"></i>
                                            <span class="text-[12px]">Barter</span>
                                        </div>
                                        <hr />
                                        <div class="pt-[15px] flex justify-between items-center">
                                            <div>
                                                <p>Huseyin</p>
                                                <p class="text-[14px] text-[#8d94ad]">${item.city}</p>
                                            </div>
                                            <div class="bg-white flex items-center justify-center rounded-[50%] w-[50px] h-[50px] border border-[#d8d8d8]">
                                                <i class="fa-solid fa-user text-[#d8d8d8] text-[30px]"></i>
                                            </div> 
                                        </div>
                                        <div class="cursor-pointer bg-[#3db460] text-center hover:bg-[#269547] transition duration-300 text-white rounded-[7px] py-[10px] mt-[15px]">
                                            <p>Nömrəni göstər</p>
                                            <div class="flex justify-center items-center gap-2 mt-[5px] text-[18px]">
                                                <i class="fa-solid fa-phone text-white"></i>
                                                <div class="flex items-center justify-center">(055) 300-00- 
                                                    <div class="flex w-[8px] h-[8px] bg-white mx-[1px] rounded-[50%]"></div>
                                                    <div class="flex w-[8px] h-[8px] bg-white mx-[1px] rounded-[50%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" mt-[10px] flex justify-between">
                                        <div class="bg-[#f6f7fa] gap-[5px] p-[10px] border border-[#eaebf2] rounded-[7px] transition duration-300 cursor-pointer hover:border-[#4c88f9] flex items-center justify-between">
                                            <div>
                                                <p class="font-[700] text-[13px]">İrəli çək</p>
                                                <p class="text-[11px] text-[#4c88f9]">3 AZN-dən</p>
                                            </div>
                                            <i class="fa-solid fa-up-long text-[#77c81d]"></i>
                                        </div>
                                        <div class="bg-[#f6f7fa] gap-[5px] p-[10px] border border-[#eaebf2] rounded-[7px] transition duration-300 cursor-pointer hover:border-[#4c88f9] flex items-center justify-between">
                                            <div>
                                                <p class="font-[700] text-[13px]">VIP</p>
                                                <p class="text-[11px] text-[#4c88f9]">3 AZN-dən</p>
                                            </div>
                                            <i class="fa-solid fa-star text-[#ff3d00]"></i>
                                        </div>
                                        <div class="bg-[#f6f7fa] gap-[5px] p-[10px] border border-[#eaebf2] rounded-[7px] transition duration-300 cursor-pointer hover:border-[#4c88f9] flex items-center justify-between">
                                            <div>
                                                <p class="font-[700] text-[13px]">Premium</p>
                                                <p class="text-[11px] text-[#4c88f9]">3 AZN-dən</p>
                                            </div>
                                            <i class="fa-solid fa-crown text-[#ff9f2b]"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })

}