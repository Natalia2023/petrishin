
// 3. На прикладі Session Storage розглянемо базові методи для запису, читання, зміни та видалення.
// Реалізуємо інпути користувача і при натисканні на кнопку submit - запишемо дані у память.
function addSessionStorageItem() {
        const inputElement = document.getElementById('add-key');
        const[key, value] = inputElement.value.split(":");
        
        if (!key || !value) {
            console.error('! valid');
             return;
        }
        sessionStorage.setItem(key, value);
        console.log('sucsesful')
    }
    function readSessionStorageItem() {
        const inputElement = document.getElementById('read-key');
        const key = inputElement.value;
        const sessionStorageElement = sessionStorage.getItem(key);
        if (!sessionStorageElement) {
            console.log("pomilka");
            return;
        }
        console.log(sessionStorageElement);
    
    }
    function updateSessionStorageItem() {
        const inputElement = document.getElementById('update-key');
        const[key, value] = inputElement.value.split(":");
        
        if (!key || !value) {
            console.error('! valid');
            return;
        }
        const sessionStorageElement = sessionStorage.getItem(key);
    if (!sessionStorageElement) {
        console.error('element not found');
        return;
    }
        sessionStorage.setItem(key, value);
        console.log('succses')
    }
    
    function deleteSessionStorageItem() {
        const inputElement = document.getElementById('delete-key');
        const key = inputElement.value;
        const sessionStorageElement = sessionStorage.getItem(key);
        if (!sessionStorageElement) {
            console.error('element not found');
            return;
        }
    
        sessionStorage.removeItem(key);
        console.log('succes');
    }
    

//
//
// 4. (Local Storage). Зреалізуємо спрощену модель кольорової схоми веб-додатку.
// За замовчуванням - при переході користувача на сторінку користувач повинен мати
// Світлу (Light) тему. Якщо користувач натискає на те щоб змінити тему - міняємо і
// записуємо її в пам'ять. При наступному відкриванні сторінки - тема повинна бути
// відновлена та використана, якщо запис знайдено у пам'яті. + кнопка очистки памяті


// const [container] = document.getElementsByClassName('container');
// console.log(container);

// window.addEventListener('storage', (_) => {
//      const colorScheme = localStorage.getItem('colorScheme');
//      handleColorScheme(colorScheme);
// });

// (function onColorSchemeLoad() {
//    const colorScheme = localStorage.getItem('colorScheme');
//    handleColorScheme(colorScheme);
// })();

// function setColorTheme(colorScheme = 'light') {
//     localStorage.setItem('colorScheme', colorScheme);
//     handleColorScheme(colorScheme);
//     window.dispatchEvent( new Event('storage') );
// }

// function clearColorThemeSelection() {
//     localStorage.removeItem('colorScheme');
//     handleColorScheme();
//     window.dispatchEvent( new Event('storage') );
// }

// function handleColorScheme (colorScheme) {
//     const validColorScheme = colorScheme && ['light', 'dark'].includes(colorScheme) 
//     ? colorScheme : 'light';
//     if (validColorScheme === 'light') {
//         container.style.backgroundColor = 'white';
//         container.style.color = 'black';
//     } 
//     if (validColorScheme === 'dark') {
//         container.style.backgroundColor = 'black';
//         container.style.color = 'white';
//     }
// }

