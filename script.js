document.addEventListener('DOMContentLoaded', function() {
    // РАСШИРЕННОЕ МЕНЮ РЕСТОРАНА (в 3 раза больше блюд)
    const menuData = {
        "Холодные закуски": [
            { name: "Брускетта с томатами и базиликом", desc: "Хрустящий хлеб с сочными томатами черри, свежим базиликом и оливковым маслом первого отжима", price: "2200 ₸" },
            { name: "Тартар из мраморной говядины", desc: "Нежный тартар из отборной говядины с каперсами, луком шалот и соусом из дижонской горчицы", price: "3900 ₸" },
            { name: "Сырное плато премиум", desc: "Ассорти из 5 европейских сыров: бри, горгонзола, пармезан, эдам, камамбер с орехами и инжиром", price: "5500 ₸" },
            { name: "Тигровые креветки в чесночном соусе", desc: "Крупные тигровые креветки, обжаренные с чесноком, белым вином и лимонным соком", price: "4800 ₸" },
            { name: "Сельдь по-царски", desc: "Филе сельди с картофелем, свеклой, яблоками и домашним майонезом", price: "1800 ₸" },
            { name: "Капрезе с бальзамико", desc: "Свежий моцарелла, томаты черри, авокадо, руккола и бальзамический крем", price: "3200 ₸" },
            { name: "Ассорти из копченой рыбы", desc: "Семга, форель и осетрина холодного копчения с лимоном и каперсами", price: "5200 ₸" },
            { name: "Паштет из утки с трюфелем", desc: "Нежный паштет из утиной печени с черным трюфелем и тостами", price: "3500 ₸" },
            { name: "Салат из морепродуктов", desc: "Кальмары, мидии, креветки с лимонным соусом и зеленью", price: "4200 ₸" },
            { name: "Вяленые томаты с козьим сыром", desc: "Вяленые томаты собственного приготовления с мягким козьим сыром и орехами", price: "2800 ₸" }
        ],
        "Горячие закуски": [
            { name: "Жульен с грибами и курицей", desc: "Шампиньоны, куриное филе в сливочном соусе под сырной корочкой", price: "2900 ₸" },
            { name: "Камбер запеченный с медом", desc: "Сыр камамбер, запеченный с цветочным медом и грецкими орехами", price: "3200 ₸" },
            { name: "Мидии в белом вине", desc: "Свежие мидии, тушеные в белом вине с чесноком и зеленью", price: "3800 ₸" },
            { name: "Креветки в кокосовой панировке", desc: "Крупные креветки в хрустящей кокосовой панировке с кисло-сладким соусом", price: "4100 ₸" },
            { name: "Карпаччо из баклажанов", desc: "Тонко нарезанные баклажаны с сыром пармезан и соусом песто", price: "2400 ₸" }
        ],
        "Салаты": [
            { name: "Цезарь с тигровыми креветками", desc: "Классический салат Цезарь с крупными тигровыми креветками и пармезаном", price: "3800 ₸" },
            { name: "Греческий с фетаксой", desc: "Свежие овощи, маслины, фета, оливковое масло и орегано", price: "2800 ₸" },
            { name: "Салат с уткой и апельсином", desc: "Утиная грудка, апельсины, руккола и медово-горчичный соус", price: "3500 ₸" },
            { name: "Нисуаз с тунцом", desc: "Свежий тунец, яйцо пашот, стручковая фасоль, томаты и оливки", price: "3200 ₸" },
            { name: "Салат с ростбифом", desc: "Нежный ростбиф с грибами, артишоками и красным луком", price: "3400 ₸" },
            { name: "Салат Вальдорф", desc: "Курица, яблоки, сельдерей, грецкие орехи и виноград в йогуртовом соусе", price: "2900 ₸" }
        ],
        "Супы": [
            { name: "Том Ям с морепродуктами", desc: "Острый тайский суп с креветками, кальмарами и кокосовым молоком", price: "3200 ₸" },
            { name: "Сливочный грибной крем-суп", desc: "Нежный крем-суп из белых грибов со сливками и трюфельным маслом", price: "2400 ₸" },
            { name: "Борщ украинский", desc: "Классический борщ со сметаной и пампушками с чесноком", price: "2200 ₸" },
            { name: "Французский луковый суп", desc: "Луковый суп с гренками и расплавленным сыром грюйер", price: "2600 ₸" },
            { name: "Уха царская", desc: "Наваристая уха из трех видов рыбы с шафраном", price: "2800 ₸" }
        ],
        "Основные блюда: Мясо": [
            { name: "Стейк Рибай 300г", desc: "Мраморная говядина на гриле с овощами гриль и соусом песто", price: "8500 ₸" },
            { name: "Медальоны из телятины", desc: "Нежные медальоны в сливочно-грибном соусе с картофельным пюре", price: "6200 ₸" },
            { name: "Бараньи ребрышки", desc: "Ребрышки маринованные в травах с овощами и мятным соусом", price: "5800 ₸" },
            { name: "Утиная грудка с ягодным соусом", desc: "Хрустящая утиная грудка с пюре из сельдерея и брусничным соусом", price: "6800 ₸" },
            { name: "Свиные ребра BBQ", desc: "Сочные ребра в фирменном BBQ соусе с картофелем фри", price: "5200 ₸" },
            { name: "Котлета по-киевски", desc: "Куриная котлета с маслом и зеленью, подается с картофельным пюре", price: "3800 ₸" },
            { name: "Рагу из кролика", desc: "Нежное рагу из кролика в красном вине с овощами", price: "5600 ₸" },
            { name: "Эскалоп из свинины", desc: "Свиной эскалоп с беконом и сыром с картофельными дольками", price: "4800 ₸" }
        ],
        "Основные блюда: Рыба и морепродукты": [
            { name: "Лосось в медово-соевом глазури", desc: "Филе лосося с брокколи, стручковой фасолью и пюре из сельдерея", price: "6200 ₸" },
            { name: "Дорадо на гриле", desc: "Целая дорадо с лимоном и травами, подается с рисом басмати", price: "5800 ₸" },
            { name: "Морской окунь в соли", desc: "Окунь, запеченный в морской соли с розмарином и лимоном", price: "6500 ₸" },
            { name: "Креветки с чесноком", desc: "Крупные креветки в чесночном соусе с чили и петрушкой", price: "5400 ₸" },
            { name: "Микс из морепродуктов", desc: "Креветки, мидии, кальмары в томатно-чесночном соусе", price: "7200 ₸" },
            { name: "Тунец с кунжутом", desc: "Стейк тунца с кунжутной корочкой, васаби и имбирным соусом", price: "6800 ₸" }
        ],
        "Паста и ризотто": [
            { name: "Паста Карбонара", desc: "Спагетти с беконом, сливочным соусом и пармезаном", price: "3200 ₸" },
            { name: "Паста с трюфелями", desc: "Спагетти с трюфельным кремом, грибами и пармезаном", price: "4500 ₸" },
            { name: "Лазанья Болоньезе", desc: "Классическая лазанья с мясным соусом и сыром моцарелла", price: "3800 ₸" },
            { name: "Ризотто с морепродуктами", desc: "Кремовое ризотто с креветками, мидиями и кальмарами", price: "4200 ₸" },
            { name: "Равиоли с рикоттой", desc: "Домашние равиоли с сыром рикотта и шпинатом в томатном соусе", price: "3500 ₸" },
            { name: "Паста с лобстером", desc: "Тальятелле с мясом лобстера в сливочном соусе", price: "7800 ₸" }
        ],
        "Гарниры": [
            { name: "Картофельное пюре с трюфелем", desc: "Нежное пюре с трюфельным маслом и зеленью", price: "1500 ₸" },
            { name: "Овощи гриль", desc: "Сезонные овощи на гриле с оливковым маслом", price: "1800 ₸" },
            { name: "Рис басмати с шафраном", desc: "Ароматный рис с шафраном и изюмом", price: "1600 ₸" },
            { name: "Картофель по-деревенски", desc: "Картофельные дольки с чесноком и розмарином", price: "1400 ₸" },
            { name: "Гречка с грибами", desc: "Гречневая каша с белыми грибами и луком", price: "1700 ₸" },
            { name: "Спаржа на пару", desc: "Свежая спаржа с лимонным соком и миндальными хлопьями", price: "2200 ₸" }
        ],
        "Десерты": [
            { name: "Тирамису классический", desc: "Итальянский десерт с кофе, маскарпоне и какао", price: "2800 ₸" },
            { name: "Шоколадный фондан", desc: "Теплый шоколадный кекс с жидкой сердцевиной и ванильным мороженым", price: "3200 ₸" },
            { name: "Чизкейк Нью-Йорк", desc: "Нежный чизкейк с ягодным соусом и мятой", price: "2600 ₸" },
            { name: "Крем-брюле", desc: "Ванильный крем с хрустящей карамельной корочкой и ягодами", price: "2400 ₸" },
            { name: "Яблочный штрудель", desc: "Тонкое тесто с яблоками, изюмом и корицей, подается с мороженым", price: "2200 ₸" },
            { name: "Профитроли с заварным кремом", desc: "Нежные профитроли с заварным кремом и шоколадным соусом", price: "2500 ₸" },
            { name: "Медовик", desc: "Классический медовый торт со сметанным кремом", price: "2000 ₸" },
            { name: "Панакота с малиной", desc: "Нежная панакота с малиновым соусом и свежими ягодами", price: "2300 ₸" },
            { name: "Мороженое собственного производства", desc: "Ассорти из 3-х видов мороженого: ванильное, шоколадное, фисташковое", price: "1800 ₸" }
        ],
        "Напитки: Вина": [
            { name: "Красное вино (бокал) - Merlot", desc: "Merlot, Италия, 150 мл", price: "3200 ₸" },
            { name: "Красное вино (бокал) - Cabernet Sauvignon", desc: "Cabernet Sauvignon, Чили, 150 мл", price: "3500 ₸" },
            { name: "Белое вино (бокал) - Chardonnay", desc: "Chardonnay, Франция, 150 мл", price: "3400 ₸" },
            { name: "Белое вино (бокал) - Sauvignon Blanc", desc: "Sauvignon Blanc, Новая Зеландия, 150 мл", price: "3600 ₸" },
            { name: "Розовое вино (бокал) - Provence", desc: "Rosé, Прованс, Франция, 150 мл", price: "3300 ₸" },
            { name: "Игристое (бокал) - Prosecco", desc: "Prosecco, Италия, 150 мл", price: "2800 ₸" },
            { name: "Шампанское (бокал) - Brut", desc: "Champagne Brut, Франция, 150 мл", price: "4500 ₸" },
            { name: "Бутылка красного вина - Rioja", desc: "Rioja Reserva, Испания, 750 мл", price: "18000 ₸" },
            { name: "Бутылка белого вина - Pinot Grigio", desc: "Pinot Grigio, Италия, 750 мл", price: "16000 ₸" }
        ],
        "Напитки: Коктейли": [
            { name: "Мохито классический", desc: "Белый ром, лайм, мята, сахар, содовая", price: "3800 ₸" },
            { name: "Маргарита", desc: "Текила, апельсиновый ликер, лаймовый сок", price: "4200 ₸" },
            { name: "Клубничный Дайкири", desc: "Ром, клубничное пюре, лайм", price: "4000 ₸" },
            { name: "Пина Колада", desc: "Ром, кокосовый сироп, ананасовый сок", price: "3800 ₸" },
            { name: "Негрони", desc: "Джин, красный вермут, кампари", price: "4500 ₸" },
            { name: "Космополитен", desc: "Водка, ликер апельсина, клюквенный сок, лайм", price: "4200 ₸" },
            { name: "Олд Фэшн", desc: "Бурбон, сахар, биттер, апельсиновая цедра", price: "4600 ₸" },
            { name: "Коктейль LA TERASSA", desc: "Фирменный коктейль с джином, ликером из бузины, лаймом и мятой", price: "4800 ₸" },
            { name: "Московский мул", desc: "Водка, имбирное пиво, лайм", price: "3800 ₸" },
            { name: "Апероль Шприц", desc: "Апероль, Просекко, содовая", price: "4000 ₸" }
        ],
        "Напитки: Безалкогольные": [
            { name: "Свежевыжатые соки", desc: "Апельсиновый, грейпфрутовый, яблочный, морковный", price: "1800 ₸" },
            { name: "Молочный коктейль", desc: "Ванильный, шоколадный, клубничный с мороженым", price: "2200 ₸" },
            { name: "Лимонады собственного производства", desc: "Мятный, ягодный, цитрусовый, имбирный", price: "2000 ₸" },
            { name: "Морс клюквенный/брусничный", desc: "Домашний морс из свежих ягод", price: "1500 ₸" },
            { name: "Газированные напитки", desc: "Coca-Cola, Fanta, Sprite, Schweppes", price: "1200 ₸" },
            { name: "Минеральная вода", desc: "Borjomi, Aqua Minerale, BonAqua", price: "1000 ₸" },
            { name: "Компот из сухофруктов", desc: "Домашний компот из яблок, груш и изюма", price: "1300 ₸" },
            { name: "Иван-чай", desc: "Травяной чай с медом и травами", price: "1400 ₸" }
        ],
        "Напитки: Горячие": [
            { name: "Эспрессо", desc: "Крепкий итальянский кофе, 30 мл", price: "1200 ₸" },
            { name: "Капучино", desc: "С нежной молочной пенкой, 200 мл", price: "1800 ₸" },
            { name: "Латте", desc: "Кофе с молоком и пенкой, 300 мл", price: "2000 ₸" },
            { name: "Флэт Уайт", desc: "Двойной эспрессо с молоком, 180 мл", price: "1900 ₸" },
            { name: "Раф кофе", desc: "Кофе со сливками и ванильным сиропом", price: "2200 ₸" },
            { name: "Американо", desc: "Черный кофе, 200 мл", price: "1400 ₸" },
            { name: "Чай черный/зеленый", desc: "Ассам, Эрл Грей, Жасмин, Ганпаудер", price: "1500 ₸" },
            { name: "Травяной чай", desc: "Ромашка, мята, мелисса, шалфей", price: "1600 ₸" },
            { name: "Какао с зефиром", desc: "Горячее какао с домашним зефиром", price: "1900 ₸" },
            { name: "Горячий шоколад", desc: "Густой горячий шоколад со взбитыми сливками", price: "2100 ₸" }
        ]
    };

    // Элементы
    const menuButton = document.getElementById('menu-button');
    const menuSection = document.getElementById('menu');
    const closeMenuButton = document.getElementById('close-menu');
    const menuContent = document.querySelector('.menu-content');
    const bookingForm = document.getElementById('booking-form');
    const bookingSuccess = document.getElementById('booking-success');

    // Открытие меню
    menuButton.addEventListener('click', function() {
        if (menuSection.style.display === 'block') {
            menuSection.style.display = 'none';
        } else {
            loadMenu();
            menuSection.style.display = 'block';
            setTimeout(() => {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    });

    // Закрытие меню
    closeMenuButton.addEventListener('click', function() {
        menuSection.style.display = 'none';
    });

    // Загрузка меню
    function loadMenu() {
        menuContent.innerHTML = '';
        
        for (const category in menuData) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'menu-category';
            
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category;
            categoryDiv.appendChild(categoryTitle);
            
            menuData[category].forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'menu-item';
                
                const itemInfo = document.createElement('div');
                const itemName = document.createElement('div');
                itemName.className = 'item-name';
                itemName.textContent = item.name;
                
                const itemDesc = document.createElement('div');
                itemDesc.className = 'item-desc';
                itemDesc.textContent = item.desc;
                
                itemInfo.appendChild(itemName);
                itemInfo.appendChild(itemDesc);
                
                const itemPrice = document.createElement('div');
                itemPrice.className = 'item-price';
                itemPrice.textContent = item.price;
                
                itemDiv.appendChild(itemInfo);
                itemDiv.appendChild(itemPrice);
                
                categoryDiv.appendChild(itemDiv);
            });
            
            menuContent.appendChild(categoryDiv);
        }
    }

    // Обработка формы бронирования
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // В реальном приложении здесь был бы AJAX-запрос на сервер
        bookingForm.style.display = 'none';
        bookingSuccess.style.display = 'block';
        
        // Прокрутка к сообщению об успехе
        bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Очистка формы (в демо-режиме)
        setTimeout(() => {
            bookingForm.reset();
            bookingForm.style.display = 'block';
            bookingSuccess.style.display = 'none';
        }, 5000);
    });

    // Установка минимальной даты для бронирования (сегодня)
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    // Плавная прокрутка к якорям
    document.querySelectorAll('nav a, .footer-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Если открыто меню, закрываем его
                        if (targetId !== '#menu') {
                            menuSection.style.display = 'none';
                        }
                        
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        });
    });

    // Дополнительные улучшения для меню
    function addMenuSearch() {
        const menuHeader = document.querySelector('.menu-header');
        
        // Создаем поисковую строку
        const searchContainer = document.createElement('div');
        searchContainer.className = 'menu-search-container';
        searchContainer.style.marginTop = '20px';
        searchContainer.style.marginBottom = '30px';
        searchContainer.style.textAlign = 'center';
        
        searchContainer.innerHTML = `
            <input type="text" id="menu-search" placeholder="Поиск блюд..." 
                   style="padding: 12px 20px; width: 80%; max-width: 400px; 
                          border-radius: 25px; border: 1px solid #555; 
                          background-color: #222; color: #fff; font-size: 1rem;">
            <button id="clear-search" style="margin-left: 10px; padding: 12px 20px; 
                    background-color: #555; color: #fff; border: none; 
                    border-radius: 5px; cursor: pointer;">Очистить</button>
        `;
        
        menuHeader.appendChild(searchContainer);
        
        const searchInput = document.getElementById('menu-search');
        const clearButton = document.getElementById('clear-search');
        
        // Функция поиска
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm.length > 0) {
                // Скрываем все категории
                document.querySelectorAll('.menu-category').forEach(category => {
                    category.style.display = 'none';
                });
                
                // Показываем только совпадающие блюда
                let foundResults = false;
                
                for (const category in menuData) {
                    const matchingItems = menuData[category].filter(item => 
                        item.name.toLowerCase().includes(searchTerm) || 
                        item.desc.toLowerCase().includes(searchTerm)
                    );
                    
                    if (matchingItems.length > 0) {
                        // Создаем новую категорию для результатов
                        const resultCategory = document.createElement('div');
                        resultCategory.className = 'menu-category';
                        
                        const categoryTitle = document.createElement('h3');
                        categoryTitle.textContent = `${category} (${matchingItems.length})`;
                        resultCategory.appendChild(categoryTitle);
                        
                        matchingItems.forEach(item => {
                            const itemDiv = document.createElement('div');
                            itemDiv.className = 'menu-item';
                            
                            const itemInfo = document.createElement('div');
                            const itemName = document.createElement('div');
                            itemName.className = 'item-name';
                            itemName.textContent = item.name;
                            
                            const itemDesc = document.createElement('div');
                            itemDesc.className = 'item-desc';
                            itemDesc.textContent = item.desc;
                            
                            itemInfo.appendChild(itemName);
                            itemInfo.appendChild(itemDesc);
                            
                            const itemPrice = document.createElement('div');
                            itemPrice.className = 'item-price';
                            itemPrice.textContent = item.price;
                            
                            itemDiv.appendChild(itemInfo);
                            itemDiv.appendChild(itemPrice);
                            
                            resultCategory.appendChild(itemDiv);
                        });
                        
                        menuContent.appendChild(resultCategory);
                        foundResults = true;
                    }
                }
                
                if (!foundResults) {
                    menuContent.innerHTML = `
                        <div style="text-align: center; padding: 50px; color: #aaa;">
                            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px;"></i>
                            <h3>Ничего не найдено</h3>
                            <p>Попробуйте изменить запрос</p>
                        </div>
                    `;
                }
            } else {
                // Если поиск очищен, загружаем полное меню
                loadMenu();
            }
        });
        
        // Кнопка очистки
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            loadMenu();
        });
    }
    
    // Добавляем поиск в меню
    setTimeout(addMenuSearch, 500);
});