// Ustawienie początkowych wartości margin-top
const addonsUtility = document.querySelector('.addons_utility');
const addonsCosmetic = document.querySelector('.addons_cosmetic');
const addonsOther = document.querySelector('.addons_other'); // Dodanie elementu addons_other

let hiddenUtility = 'yes'; // Ustalamy początkową wartość zmiennej hidden dla utility
let hiddenCosmetic = 'yes'; // Ustalamy początkową wartość zmiennej hidden dla cosmetic
let hiddenOther = 'yes'; // Ustalamy początkową wartość zmiennej hidden dla other

// Ustawiamy początkowe wartości na -100%
addonsUtility.style.marginTop = '-100%';
addonsCosmetic.style.marginTop = '-100%';
addonsOther.style.marginTop = '-100%'; // Ustawiamy margin-top dla addons_other

// Funkcja do przełączania widoczności elementu
function toggleVisibility(element, hiddenVariable) {
    if (hiddenVariable === 'yes') {
        element.style.marginTop = '0px'; // Ustawiamy margin-top na 0px
        return 'no'; // Zmieniamy wartość hidden na 'no'
    } else {
        element.style.marginTop = '-100%'; // Ustawiamy margin-top na -100%
        return 'yes'; // Zmieniamy wartość hidden na 'yes'
    }
}

// Funkcja do przełączania klasy 'active'
function toggleActive(button, isActive) {
    button.classList.toggle('active', isActive);
}

// Event listener dla przycisku utility
document.getElementById('utility').addEventListener('click', function() {
    // Przełączanie widoczności dla utility
    hiddenUtility = toggleVisibility(addonsUtility, hiddenUtility);
    
    // Zwijamy kosmetyk i inne, jeśli są rozwinięte
    if (hiddenCosmetic === 'no') {
        hiddenCosmetic = toggleVisibility(addonsCosmetic, hiddenCosmetic);
        toggleActive(document.getElementById('cosmetic'), false); // Wyłącz klasę 'active' dla cosmetic
    }
    if (hiddenOther === 'no') {
        hiddenOther = toggleVisibility(addonsOther, hiddenOther);
        toggleActive(document.getElementById('other'), false); // Wyłącz klasę 'active' dla other
    }

    // Przełącz klasę 'active' dla utility
    toggleActive(this, hiddenUtility === 'no'); // Dodaj lub usuń klasę 'active'
});

// Event listener dla przycisku cosmetic
document.getElementById('cosmetic').addEventListener('click', function() {
    // Przełączanie widoczności dla cosmetic
    hiddenCosmetic = toggleVisibility(addonsCosmetic, hiddenCosmetic);
    
    // Zwijamy utility i inne, jeśli są rozwinięte
    if (hiddenUtility === 'no') {
        hiddenUtility = toggleVisibility(addonsUtility, hiddenUtility);
        toggleActive(document.getElementById('utility'), false); // Wyłącz klasę 'active' dla utility
    }
    if (hiddenOther === 'no') {
        hiddenOther = toggleVisibility(addonsOther, hiddenOther);
        toggleActive(document.getElementById('other'), false); // Wyłącz klasę 'active' dla other
    }

    // Przełącz klasę 'active' dla cosmetic
    toggleActive(this, hiddenCosmetic === 'no'); // Dodaj lub usuń klasę 'active'
});

// Event listener dla przycisku other
document.getElementById('other').addEventListener('click', function() {
    // Przełączanie widoczności dla other
    hiddenOther = toggleVisibility(addonsOther, hiddenOther);
    
    // Zwijamy utility i kosmetyk, jeśli są rozwinięte
    if (hiddenUtility === 'no') {
        hiddenUtility = toggleVisibility(addonsUtility, hiddenUtility);
        toggleActive(document.getElementById('utility'), false); // Wyłącz klasę 'active' dla utility
    }
    if (hiddenCosmetic === 'no') {
        hiddenCosmetic = toggleVisibility(addonsCosmetic, hiddenCosmetic);
        toggleActive(document.getElementById('cosmetic'), false); // Wyłącz klasę 'active' dla cosmetic
    }

    // Przełącz klasę 'active' dla other
    toggleActive(this, hiddenOther === 'no'); // Dodaj lub usuń klasę 'active'
});

// Logowanie stanu po każdym kliknięciu
setInterval(() => {
    console.log(`Utility state: ${hiddenUtility}, Cosmetic state: ${hiddenCosmetic}, Other state: ${hiddenOther}`);
}, 1000);
