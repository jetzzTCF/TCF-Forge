let data = [
    {
        id: 1,
        name: 'МАКCИМАЛЬНАЯ СТАМИНА', 
        type: 'stamina',
        order: 1,
        gear: ['helmet', 'armor', 'backpack'], 
        text: '+ 20 / 45 стамины', 
        items: [[1, 1], [2, 3], [3, 3], [4, 3], [5, 3]]
    },
    {
        id: 2,
        name: 'УМЕНЬШЕННОЕ ПОТРЕБЛЕНИЕ ВЫНОСЛИВОСТИ', 
        type: 'stamina',
        order: 1,
        gear: ['helmet', 'armor', 'backpack'], 
        text: '- 5 / 20 % потребление выносливости', 
        items: [[4, 3], [4, 3], [6, 3], [3, 3]]
    },
    {
        id: 3,
        name: 'МЕНЬШЕ УРОНА ОТ БУРИ', 
        type: 'armor',
        order: 2, 
        gear: ['helmet', 'armor', 'backpack'], 
        text: '- 5 / 30 % урона от бури', 
        items: [[1, 2], [7, 2]]
    },
    {
        id: 4,
        name: 'УМЕНЬШЕННЫЙ ВЕС СНАРЯЖЕНИЯ', 
        type: 'unic',
        order: 5, 
        gear: ['helmet', 'armor', 'backpack'], 
        text: '- 50 % веса снаряжения', 
        items: [[7, 2], [2, 3], [10, 3]]
    },
    {
        id: 5,
        name: 'УМЕНЬШЕННЫЙ УРОН ОТ ПАДЕНИЯ', 
        type: 'armor',
        order: 2, 
        gear: ['armor', 'backpack'], 
        text: '- 5 / 30 % урона от падения', 
        items: [[11, 2], [5, 3], [12, 3], [13, 3]]
    },
    {
        id: 6,
        name: 'УВЕЛИЧЕННАЯ СКОРОСТЬ ХОДЬБЫ', 
        type: 'speed',
        order: 4, 
        gear: ['armor', 'backpack'], 
        text: '+ 4 / 8 % к скорости ходьбы', 
        items: [[11, 2], [13, 3]]
    },
    {
        id: 7,
        name: 'УМЕНЬШЕННЫЙ ВЕС ВСЕХ ПРЕДМЕТОВ В ИНВЕНТАРЕ', 
        type: 'unic',
        order: 5, 
        gear: ['backpack'], 
        text: '- 10 / 50 % веса ВСЕХ предметов', 
        items: [[14, 2], [15, 2]]
    },
    {
        id: 8,
        name: 'УМЕНЬШЕННЫЙ ВЕС МИНЕРАЛОВ И ЧАСТЕЙ СУЩЕСТВ', 
        type: 'unic',
        order: 5, 
        gear: ['backpack'], 
        text: '-10 / 50 % веса минералов и частей существ', 
        items: [[16, 2], [10, 3]]
    },
    {
        id: 9,
        name: 'УМЕНЬШЕННЫЙ ВЕС БОЕПРИПАСОВ И РАСХОДНЫХ МАТЕРИАЛОВ', 
        type: 'unic',
        order: 5, 
        gear: ['backpack'], 
        text: '-10 / 50 % веса боеприпасов и расходников', 
        items: [[12, 3]]
    },
    {
        id: 10,
        name: 'СНИЖЕНИЕ ВЕСА ОРУЖИЯ И СНАРЯЖЕНИЯ', 
        type: 'unic',
        order: 5, 
        gear: ['backpack'], 
        text: '-10 / 50 % веса оружия и снаряжения', 
        items: [[12, 3]]
    },
    {
        id: 11,
        name: 'ДОПОЛНИТЕЛЬНАЯ ВМЕСТИМОСТЬ РЮКЗАКА', 
        type: 'unic',
        order: 5, 
        gear: ['backpack'], 
        text: '+ 10 / 60 веса', 
        items: [[16, 2], [14, 2]]
    },
    {
        id: 12,
        name: 'ВОССТАНОВЛЕНИЯ СТАМИНЫ БЕЗ ЗАДЕРЖКИ ВО ВРЕМЯ БУРИ', 
        type: 'stamina',
        order: 1,
        gear: ['backpack'], 
        text: '- 80% задержки восстановления стамины во время бури', 
        items: [[15, 2], [9, 3]]
    },
    {
        id: 13,
        name: 'ВОССТАНОВЛЕНИЯ ЗДОРОВЬЯ В СЕКУНДУ', 
        type: 'hp',
        order: 3, 
        gear: ['helmet', 'armor'], 
        text: '+ 0.3 / 0.8 здоровья в секунду', 
        items: [[17, 2], [18, 2], [6, 3], [10, 3]]
    },
    {
        id: 14,
        name: 'ВОССТАНОВЛЕНИЯ ЗДОРОВЬЯ В СЕКУНДУ ВО ВРЕМЯ ШТОРМА', 
        type: 'hp',
        order: 3, 
        gear: ['helmet', 'armor'], 
        text: '+ 0.5 / 1.5 здоровья в секунду во время шторма', 
        items: [[29, 2], [18, 2], [19, 3], [9, 3]]
    },
    {
        id: 15,
        name: 'ШПРИЦ И АПТЕЧКА ИСПОЛЬЗУЕТСЯ БЫСТРЕЕ', 
        type: 'hp',
        order: 3, 
        gear: ['helmet', 'armor'], 
        text: '- 10 / 30 % быстрее использование шприца или аптечки', 
        items: [[20, 2], [1, 2], [29, 2]]
    },
    {
        id: 16,
        name: 'УМЕНЬШЕННЫЙ УРОН ОТ МОБОВ', 
        type: 'armor',
        order: 2, 
        gear: ['helmet', 'armor'], 
        text: '- 5 / 25 % урона от мобов', 
        items: [[21, 1], [22, 2], [4, 2], [5, 3]]
    },
    {
        id: 17,
        name: 'ДОП. БРОНЯ ДЛЯ ШЛЕМА', 
        type: 'armor',
        order: 2, 
        gear: ['helmet'], 
        text: '+ 3 брони', 
        items: [[23, 2], [19, 2]]
    },
    {
        id: 18,
        name: 'ДОП. БРОНЯ ДЛЯ НАГРУДНИКА', 
        type: 'armor',
        order: 2, 
        gear: ['armor'], 
        text: '+ 3 брони', 
        items: [[23, 2], [19, 2]]
    },
    {
        id: 19,
        name: 'УМЕНЬШЕННЫЙ УРОН ОТ ВЗРЫВОВ', 
        type: 'armor',
        order: 2, 
        gear: ['helmet', 'armor'], 
        text: '- 10 / 50 % урона от взрывов', 
        items: [[23, 2], [22, 2]]
    },
    {
        id: 20,
        name: 'БОНУС К ХП ОТ ХИЛА ШПРИЦА ИЛИ АПТЕЧКИ', 
        type: 'hp',
        order: 3, 
        gear: ['armor'], 
        text: '+ 5 / 15 здоровья от шприца или аптечки', 
        items: [[20, 2], [18, 2]]
    },
    {
        id: 21,
        name: 'МОБЫ МЕНЕЕ ВРАЖДЕБНЫ К ВАМ', 
        type: 'unic',
        order: 5, 
        gear: ['armor'], 
        text: '- 40 % дальности видимости и звука у существ', 
        items: [[21, 1], [1, 2], [4, 3], [13, 3]]
    },
    {
        id: 22,
        name: 'ЗРЕНИЕ ОХОТНИКА (ВХ НА ШЛЕМ xd)', 
        type: 'unic',
        order: 5, 
        gear: ['helmet'], 
        text: 'ВХ НА ШЛЕМ (НЕ РАБОТАЕТ)', 
        items: [[21, 1], [24, 1]]
    },
    {
        id: 23,
        name: 'МАКСИМАЛЬНОЕ ЗДОРОВЬЕ', 
        type: 'hp',
        order: 3, 
        gear: ['helmet'], 
        text: '+ 5 / 15 здоровья', 
        items: [[24, 1], [17, 2], [20, 2]]
    },
];

data.forEach(item => {
    document.querySelector('.buff__wrapper').innerHTML += 
        `<div class="buff__item buff__item-${item.type}" data-id="${item.id}" onclick="generate(this)">`+
            `<img draggable="false" src="img/${item.type}.svg" class="buff__item-img">`+
            `<div class="buff__item-text"><span>${item.text}</span></div>`+
        `</div>`;
});

function generate(value) {
    let item = data.find(elem => elem.id === +value.dataset.id);

    document.querySelectorAll('.buff__item-text').forEach(elem => elem.className = 'buff__item-text');
    value.querySelector('.buff__item-text').classList.add(`buff__item-${item.type}--active`);

    document.querySelector('.req').innerHTML = '';
    item.items.forEach(elem => {
        document.querySelector('.req').innerHTML += 
            `<div class="req__item">`+
                `<img draggable="false" src="img/${elem[0]}.png" class="req__item-img">`+
                `<div class="req__item-count">x ${elem[1]}</div>`+
            `</div>`;
    });
};

function gear(value, e) {
    let arr = data.filter(elem => elem.gear.includes(value));
    arr.sort((a, b) => a.order - b.order);

    document.querySelectorAll('.gear__item').forEach(elem => elem.classList.remove('gear__item--active'));
    e.classList.add('gear__item--active');

    document.querySelector('.buff__select').classList.remove('buff__select--active');
    document.querySelector('.buff__wrapper').classList.add('buff__wrapper--active');
    document.querySelector('.buff__wrapper').scrollTo(0, 0);

    document.querySelector('.req').innerHTML = '';
    document.querySelector('.buff__wrapper').innerHTML = '';
    arr.forEach(elem => {
        document.querySelector('.buff__wrapper').innerHTML += 
        `<div class="buff__item buff__item-${elem.type}" data-id="${elem.id}" onclick="generate(this)">`+
            `<img draggable="false" src="img/${elem.type}.svg" class="buff__item-img">`+
            `<div class="buff__item-text"><span>${elem.text}</span></div>`+
        `</div>`;
    });
};

document.querySelector('.gear__reset').onclick = e => {
    document.querySelector('.buff__select').classList.add('buff__select--active');
    document.querySelector('.buff__wrapper').classList.remove('buff__wrapper--active');
    document.querySelector('.req').innerHTML = '';
    document.querySelectorAll('.gear__item').forEach(elem => elem.classList.remove('gear__item--active'));
};
