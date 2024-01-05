const mobMenu = document.querySelector('.mob_menu');
const burgerBtn = document.querySelector('.burgerBtn');
const body = document.querySelector('.body'); 
const html = document.querySelector('.html');


// Burger menu
burgerBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(mobMenu)
    mobMenu.classList.toggle('show-mob_menu')
    body.classList.toggle('show-mob_menu')
    html.style.overflow='hidden'
    if (!mobMenu.classList.contains('show-mob_menu')) {
        html.style.overflow = 'scroll'
    }
})

// Tabs
const tabBtn = document.querySelectorAll('.tab-btn')
const tabItem = document.querySelectorAll('.tab-item')
const categoryData = document.querySelector('#category-data')

tabBtn.forEach(i => {
	i.addEventListener('click', function () {
		let currentBtn = i
		let tabId = currentBtn.getAttribute('data-tab')
		let currentTab = document.querySelector(tabId)

		tabBtn.forEach(item => {
			item.classList.remove('active')
		})

		tabItem.forEach(item => {
			item.classList.remove('active-tab')
		})

		currentBtn.classList.add('active')
		currentTab.classList.add('active-tab')

		let text = currentBtn.getAttribute('data-name')

		if (currentBtn.classList.contains('active')) {
			categoryData.textContent = `${text}`
		}
	})
})


// // JavaScript код для управления счетчиком
// let counterValue = 200;
// const counterElement = document.getElementById('count-data')
// const step = 10;
// const minValue = 200;
// const maxValue = 3000;

// function writeCounter() {
//     counterElement.textContent = counterValue;
// }

// function increment() {
//     if (counterValue + step <= maxValue) {
//         counterValue += step;
//         writeCounter();
// 		result()
//     }
// }

// function decrement() {
//     if (counterValue - step >= minValue) {
//         counterValue -= step;
//         writeCounter();
// 		result()
//     }
// }

// // Используйте функцию writeCounter() для начальной установки значения
// writeCounter();




// // Калькулятор
// const calculate = () => {
//     const activeTab = document.querySelector('.active-tab');
// 	const textiles = document.querySelector('.textiles');
// 	const priceData = document.querySelector('#price-data')

//     if (activeTab, textiles) {
//         const activeBtn = activeTab.querySelector('.radio-btn.active');
// 		const activeTextile = textiles.querySelector('.radio-btn.active')

//         if (activeBtn, activeTextile) {
//             // Выбранная кнопка с классом "active" внутри .active-tab
//             const activeTabDataPrice = activeBtn.getAttribute('data-price')
// 			const activeTextileDataPrice = activeTextile.getAttribute('data-price');
			

// 			let plus = activeTabDataPrice + activeTextileDataPrice;

// 			function result () {
// 				let total = plus * counterValue
// 				priceData.textContent = total
// 			} 

// 			result()
			

// 			console.log(activeTabDataPrice, activeTextileDataPrice);
//         } else {
//             console.log('В .active-tab нет кнопки с классом "active"');
//         }
//     } else {
//         console.log('Нет элемента с классом "active-tab"');
//     }
// }

// // Пример использования
// calculate();


// // Radio btn
// const clickBtn = (btns, wrapper, data) => {
// 	const allBtns = document.querySelectorAll(btns)
// 	// const currentWrapper = document.querySelector(wrapper)
// 	const currentData = document.querySelector(data)

// 	allBtns.forEach(btn => {
// 		btn.addEventListener('click', () => {
// 			const parentWrapper = btn.closest(wrapper)

// 			if (parentWrapper) {
// 				// Remove 'active' class from all buttons inside the wrapper
// 				parentWrapper.querySelectorAll('.radio-btn').forEach(item => {
// 					item.classList.remove('active')
// 				})

// 				// Add 'active' class to the clicked button
// 				btn.classList.add('active')

// 				// Update the data
// 				const dataName = btn.getAttribute('data-name')
// 				// const dataPrice = btn.getAttribute('data-price')

// 				calculate()

// 				// console.log(dataName)
// 				// console.log(dataPrice)

// 				if (currentData) {
// 					currentData.textContent = `${dataName}`
// 				}
// 			}
// 		})
// 	})

	
// }

// // Применяем функцию к нужным табам
// clickBtn('.radio-btn', '.active-tab', '#type-data')
// clickBtn('.radio-btn', '.textiles', '#textile-data')
// clickBtn('.radio-btn', '.color', '#color-data')

// JavaScript код для управления счетчиком
let counterValue = 200;
const counterElement = document.getElementById('count-data');
const step = 10;
const minValue = 200;
const maxValue = 3000;

function writeCounter() {
    counterElement.textContent = counterValue;
}

function increment() {
    if (counterValue + step <= maxValue) {
        counterValue += step;
        writeCounter();
        calculate(); // Обновляем данные при увеличении счетчика
    }
}

function decrement() {
    if (counterValue - step >= minValue) {
        counterValue -= step;
        writeCounter();
        calculate(); // Обновляем данные при уменьшении счетчика
    }
}

// Используйте функцию writeCounter() для начальной установки значения
writeCounter();

// Калькулятор
const calculate = () => {
    const activeTab = document.querySelector('.active-tab');
    const textiles = document.querySelector('.textiles');
    const priceData = document.querySelector('#price-data');

    if (activeTab && textiles) {
        const activeBtn = activeTab.querySelector('.radio-btn.active');
        const activeTextile = textiles.querySelector('.radio-btn.active');

        if (activeBtn && activeTextile) {
            const activeTabDataPrice = parseFloat(activeBtn.getAttribute('data-price'));
            const activeTextileDataPrice = parseFloat(activeTextile.getAttribute('data-price'));

            let plus = activeTabDataPrice + activeTextileDataPrice;

            let total = plus * counterValue;
            priceData.textContent = total;

            console.log(activeTabDataPrice, activeTextileDataPrice);
        } else {
            console.log('В .active-tab нет кнопки с классом "active"');
        }
    } else {
        console.log('Нет элемента с классом "active-tab"');
    }
}

// Radio btn
const clickBtn = (btns, wrapper, data) => {
    const allBtns = document.querySelectorAll(btns);
    const currentData = document.querySelector(data);

    allBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentWrapper = btn.closest(wrapper);

            if (parentWrapper) {
                // Remove 'active' class from all buttons inside the wrapper
                parentWrapper.querySelectorAll('.radio-btn').forEach(item => {
                    item.classList.remove('active');
                });

                // Add 'active' class to the clicked button
                btn.classList.add('active');

                // Update the data
                const dataName = btn.getAttribute('data-name');
                // const dataPrice = btn.getAttribute('data-price');

                calculate();

                // console.log(dataName)
                // console.log(dataPrice)

                if (currentData) {
                    currentData.textContent = `${dataName}`;
                }
            }
        });
    });
}

// Применяем функцию к нужным табам
clickBtn('.radio-btn', '.active-tab', '#type-data');
clickBtn('.radio-btn', '.textiles', '#textile-data');
clickBtn('.radio-btn', '.color', '#color-data');

// Инициализируем счетчик
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
















