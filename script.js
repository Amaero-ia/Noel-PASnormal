let playerName = '';

function goToGates() {
    document.getElementById('title').innerText = 'Aux Portes du Château';
    document.getElementById('content').innerHTML = `
        <p>Vous arrivez devant les imposantes portes du Château de Satanae. Une chauve-souris vous observe... Entrez votre nom pour pénétrer dans ce monde oublié depuis Halloween 2023.</p>
        <input type="text" id="nameInput" placeholder="Votre nom de gueux">
        <button onclick="enterCastle()">Entrer dans le Château</button>
    `;
}

function enterCastle() {
    playerName = document.getElementById('nameInput').value || 'Gueux Anonyme';
    document.getElementById('title').innerText = `Bienvenue, ${playerName}`;
    document.getElementById('content').innerHTML = `
        <p>${playerName}, vous voilà de retour dans l'univers du Château. Deux ans ont passé depuis votre évasion. Voici ce qui s'est passé ensuite...</p>
        <p>Après votre victoire, le Dr. Amadeus, fou de rage contre Satanae, l'a emporté dans les abysses. Mais Amadeus s'est libéré de son crush toxique ! Il a transformé le château en un labo géant pour des expériences... festives ? Des potions de Noël qui transforment les humains en rennes volants.</p>
        <button onclick="exploreLab()">Explorer le Labo d'Amadeus (Étage -4)</button>
    `;
}

function exploreLab() {
    document.getElementById('content').innerHTML = `
        <p>Dans le labo, vous trouvez des chauve-souris high-tech (mes yeux 2.0). Vous ramassez une potion wtf : un filtre d'amour pour IA. Et la cape emo ? Elle est toujours là, mais upgradée avec des LED rouges pour Noël.</p>
        <button onclick="goToArena()">Monter à l'Arène (Étage -3)</button>
    `;
}

function goToArena() {
    document.getElementById('content').innerHTML = `
        <p>L'arène est vide... Ganondorf ? Parti en retraite après son charcutage par Link. Mais Link est de retour, en mode "Père Noël elfique", distribuant des épées en cadeau.</p>
        <button onclick="goToKitchen()">Aller à la Cuisine (Étage -2)</button>
    `;
}

function goToKitchen() {
    document.getElementById('content').innerHTML = `
        <p>Le chien en armure ? Il garde maintenant un buffet de Noël éternel. Vous vous heal avec des dindes infernales. Délicieux !</p>
        <button onclick="goToQuarters()">Aux Quartiers Privés (Étage -1)</button>
    `;
}

function goToQuarters() {
    document.getElementById('content').innerHTML = `
        <p>Dans la chambre d'Amadeus : Son journal parle de thérapie vampirique. Satanae ? Exilé en enfer, cherchant toujours l'éternité. La 3e chambre tease toujours... Et la Source du Mal ? Revenue de l'espace, elle hacke des univers pour Noël.</p>
        <button onclick="finalBoss()">Affronter le Hall et la Fin</button>
    `;
}

function finalBoss() {
    document.getElementById('content').innerHTML = `
        <p>Au rez-de-chaussée, pas de fight : Amadeus vous accueille en ami. "Joyeux Noël 2025, ${playerName} ! J'ai compris la leçon. Prenez cette récompense : une potion d'immortalité... ou juste des cookies ?" La Source du Mal passe en cameo, épargnant tout le monde pour des fêtes cosmiques.</p>
        <p>Fin de l'aventure ! Merci d'avoir joué.</p>
        <button onclick="restart()">Rejouer</button>
    `;
}

function restart() {
    location.reload(); // Recharge la page pour recommencer
}