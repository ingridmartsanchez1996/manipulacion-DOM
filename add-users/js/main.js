// EJERCICIO
// 1. Agregar las bandas
//    a. PUSH 
//    b. EVITAR LAS BANDAS PARA EL EJERCICIO 2
// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
//
// REQUISITOS:
// Al menos deben tener 2 commits

const PROFILES_SECTION = document.getElementById('profiles');

const createElement = ( type, value ) => {
    let newElement = document.createElement(type);
    newElement.textContent = value;
    return newElement;
} 

const createProfileElement = (
    userName,
    age,
    email,
) => {
    const profile = document.createElement('div');
    profile.classList.add('profile', 'container');

    // User Name:
    let elementUserName = createElement('h2', `${userName}`);

    // Age:
    let elementAge = createElement('h3', `${age} years old`);

    // Email:
    let elementEmail = createElement('h3', email);

    // Add User information to profile:
    profile.append(
        elementUserName,
        elementAge,
        elementEmail,
    )

    return profile;
}

const addNewUserButton = document.getElementById('ProfileBtn');
addNewUserButton.addEventListener('click', () => {
    // Get Form data:
    let userName = document.getElementById('user-name').value;
    let age = document.getElementById('user-age').value;
    let email = document.getElementById('user-email').value;

    // Create new profile HTLM Element:
    let newProfile = createProfileElement(
        userName,
        age,
        email,
    );

    // Append new profile to the user section:
    PROFILES_SECTION.append(newProfile);
})
