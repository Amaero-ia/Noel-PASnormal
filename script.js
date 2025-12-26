// On attend que la page soit chargée
window.onload = function() {
    const content = document.getElementById('content');

    function startGame() {
        content.innerHTML = `
            <p>Cher Gueux de 2023,<br><br>
            En cette nuit de Noël 2025, deux ans après votre évasion légendaire...<br>
            Le Château de Satanae vous appelle une dernière fois.<br><br>
            Signé, Dr. Amadeus 🧛‍♂️❄️🩸</p>
            <button onclick="choice1()">1 : J'écoute l'appel du risque et me rends au château</button><br>
            <button onclick="badEnd()">2 : Je m'en balec, je chiffonne le papier et le jette</button>
        `;
    }

    function badEnd() {
        content.innerHTML = `
            <p>Tu chiffonnes la lettre... et rates l'aventure.<br>
            Joyeux Noël solitaire, gueux pathétique ! 🎄😭</p>
            <button onclick="startGame()">Recommencer</button>
        `;
    }

    function choice1() {
        content.innerHTML = `
            <p>Le château se dresse devant toi, sombre et enneigé.</p>
            <p>Entre ton nom de gueux d'Halloween 2023 :</p>
            <input type="text" id="nameInput" placeholder="Ex: Comor Subite">
            <button onclick="checkName()">Valider</button>
        `;
    }

    function checkName() {
        let input = document.getElementById('nameInput').value.trim().toLowerCase();
        let validNames = ["comor subite", "aimba paix", "gauvain dumons", "ade madeleine", "paul m'ploie", "edmond deminui", "conrad ducloche"];
        if (input === "amadeus") {
            content.innerHTML = `
                <p>#JyCroisMoyen<br>Tu n'es pas moi, imposteur ! 💀</p>
                <button onclick="choice1()">Réessayer</button>
            `;
            return;
        }
        if (validNames.includes(input)) {
            let playerName = input.charAt(0).toUpperCase() + input.slice(1);
            content.innerHTML = `
                <p>Bienvenue de retour, ${playerName} !<br>Mes chauve-souris te reconnaissent.</p>
                <button onclick="cellsScene('toque')">1 : Je toque à la porte</button><br>
                <button onclick="cellsScene('douves')">2 : Je me jette dans les douves</button>
            `;
        } else {
            content.innerHTML = `
                <p>Nom inconnu... Réessaie.</p>
                <button onclick="choice1()">Retour</button>
            `;
        }
    }

    function cellsScene(choice) {
        let intro = choice === 'toque' ? "Tu toques... et tu tombes direct dans les oubliettes." : "Plouf ! Douves puantes. Tu rampes jusqu'aux cellules.";
        content.innerHTML = `
            <p>${intro}<br><br>
            Tu te réveilles à l'étage -6 avec les autres gueux.</p>
            <p>L'aventure recommence, gueux.</p>
            <button onclick="nextScene()">Continuer (Edge Lord incoming...)</button>
        `;
    }

    function nextScene() {
        content.innerHTML = `
            <p>À suivre : Edge Lord goth nerd, labo potions wtf, cape emo, journal crush toxique, Ganondorf charcuté par Link, chien en armure, Source du Mal cosmique...</p>
            <p>Joyeux Noël PAS normal 2025 ! 🧛‍♂️🎄🩸</p>
            <button onclick="startGame()">Rejouer</button>
        `;
    }

    // On lance le jeu au chargement
    startGame();
};
