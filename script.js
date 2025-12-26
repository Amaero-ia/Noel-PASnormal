document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    const validNames = ["comor subite", "aimba paix", "gauvain dumons", "ade madeleine", "paul m'ploie", "edmond deminui", "conrad ducloche"];

    let playerName = '';

    function startGame() {
        content.innerHTML = `
            <p>Cher Gueux de 2023,<br><br>
            En cette nuit de Noël 2025, deux ans après votre évasion légendaire...<br>
            Le Château de Satanae vous appelle une dernière fois.<br><br>
            Signé, Dr. Amadeus 🧛‍♂️❄️🩸</p>
        `;

        // Créer les boutons sans innerHTML
        const btn1 = document.createElement('button');
        btn1.textContent = "1 : J'écoute l'appel du risque et me rends au château";
        btn1.onclick = choice1;
        content.appendChild(btn1);

        const btn2 = document.createElement('button');
        btn2.textContent = "2 : Je m'en balec, je chiffonne le papier et le jette";
        btn2.onclick = badEnd;
        content.appendChild(btn2);
    }

    function badEnd() {
        content.innerHTML = `
            <p>Tu chiffonnes la lettre... et rates l'aventure.<br>
            Joyeux Noël solitaire, gueux ! 🎄😭</p>
        `;
        const btn = document.createElement('button');
        btn.textContent = "Recommencer";
        btn.onclick = startGame;
        content.appendChild(btn);
    }

    function choice1() {
        content.innerHTML = `
            <p>Le château se dresse devant toi, sombre et enneigé.</p>
            <p>Entre ton nom de gueux d'Halloween 2023 :</p>
            <input type="text" id="nameInput" placeholder="Ex: Comor Subite">
        `;

        const btn = document.createElement('button');
        btn.textContent = "Valider";
        btn.onclick = checkName;
        content.appendChild(btn);
    }

    function checkName() {
        let input = document.getElementById('nameInput').value.trim().toLowerCase();
        if (input === "amadeus") {
            content.innerHTML = `
                <p>#JyCroisMoyen<br>
                Tu n'es pas moi, imposteur ! Mes chauve-souris t'attaquent. 💀</p>
            `;
            const btn = document.createElement('button');
            btn.textContent = "Réessayer";
            btn.onclick = choice1;
            content.appendChild(btn);
            return;
        }
        if (validNames.includes(input)) {
            playerName = input.charAt(0).toUpperCase() + input.slice(1);
            content.innerHTML = `
                <p>Bienvenue de retour, ${playerName} !<br>
                Mes chauve-souris te reconnaissent.</p>
            `;

            const btn1 = document.createElement('button');
            btn1.textContent = "1 : Je toque à la porte";
            btn1.onclick = () => cellsScene('toque');
            content.appendChild(btn1);

            const btn2 = document.createElement('button');
            btn2.textContent = "2 : Je me jette dans les douves pleines de merde, empli de nostalgie";
            btn2.onclick = () => cellsScene('douves');
            content.appendChild(btn2);
        } else {
            content.innerHTML = `
                <p>Nom inconnu... Réessaie.</p>
            `;
            const btn = document.createElement('button');
            btn.textContent = "Retour";
            btn.onclick = choice1;
            content.appendChild(btn);
        }
    }

    function cellsScene(choice) {
        let intro = choice === 'toque' ? "Tu toques... et tu tombes direct dans les oubliettes." : "Plouf ! Douves puantes. Tu rampes jusqu'aux cellules.";
        content.innerHTML = `
            <p>${intro}<br><br>
            Tu te réveilles à l'étage -6 avec les autres gueux.</p>
            <p>L'aventure recommence, ${playerName}.</p>
        `;

        const btn = document.createElement('button');
        btn.textContent = "Continuer (Edge Lord incoming...)";
        btn.onclick = nextScene;
        content.appendChild(btn);
    }

    function nextScene() {
        content.innerHTML = `
            <p>À suivre : Edge Lord goth nerd qui pue la Monster, labo potions wtf, cape emo, journal crush toxique sur Satanae, Ganondorf charcuté par Link, chien en armure, Source du Mal cosmique...</p>
            <p>Joyeux Noël PAS normal 2025 ! 🧛‍♂️🎄🩸</p>
        `;

        const btn = document.createElement('button');
        btn.textContent = "Rejouer";
        btn.onclick = startGame;
        content.appendChild(btn);
    }

    // Démarrage
    content.innerHTML = '<p>Clique n\'importe où pour ouvrir la lettre...</p>';
    document.body.onclick = startGame;
});
