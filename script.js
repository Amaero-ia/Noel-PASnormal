document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const title = document.getElementById('title');

    const validNames = ["comor subite", "aimba paix", "gauvain dumons", "ade madeleine", "paul m'ploie", "edmond deminui", "conrad ducloche"];

    let playerName = '';

    function startGame() {
        title.innerText = "L'Invitation du Dr. Amadeus";
        content.innerHTML = `
            <p>Cher Gueux de 2023,<br><br>
            En cette nuit de Noël 2025, deux ans après votre évasion légendaire...<br>
            Le Château de Satanae vous appelle une dernière fois. Des récompenses ? Des pièges ? De la nostalgie ?<br><br>
            Venez, si vous osez revivre l'horreur festive.<br><br>
            Signé,<br>
            Dr. Amadeus 🧛‍♂️❄️🩸</p>
        `;

        let btn1 = document.createElement('button');
        btn1.textContent = "1 : J'écoute l'appel du risque et me rends au château, empli de nostalgie";
        btn1.addEventListener('click', choice1);
        content.appendChild(btn1);
        content.appendChild(document.createElement('br'));

        let btn2 = document.createElement('button');
        btn2.textContent = "2 : Je m'en balec, je chiffonne le papier et le jette";
        btn2.addEventListener('click', badEnd);
        content.appendChild(btn2);
    }

    function badEnd() {
        content.innerHTML = `
            <p>Tu chiffonnes la lettre... et rates l'aventure. Joyeux Noël solitaire, gueux pathétique ! 🎄😭</p>
        `;

        let btn = document.createElement('button');
        btn.textContent = "Recommencer";
        btn.addEventListener('click', startGame);
        content.appendChild(btn);
    }

    function choice1() {
        title.innerText = "Aux Portes du Château";
        content.innerHTML = `
            <p>Le château se dresse, enneigé et menaçant sous la lune rouge.</p>
            <p>Entre ton nom de gueux d'Halloween 2023 pour que mes chauve-souris te reconnaissent :</p>
            <input type="text" id="nameInput" placeholder="Ex: Comor Subite">
        `;

        let btn = document.createElement('button');
        btn.textContent = "Valider mon destin";
        btn.addEventListener('click', checkName);
        content.appendChild(btn);
    }

    function checkName() {
        let input = document.getElementById('nameInput').value.trim().toLowerCase();
        if (input === "amadeus") {
            content.innerHTML = `
                <p>#JyCroisMoyen<br>Tu n'es pas moi, imposteur ! Mes chauve-souris t'attaquent. 💀</p>
            `;

            let btn = document.createElement('button');
            btn.textContent = "Réessayer";
            btn.addEventListener('click', choice1);
            content.appendChild(btn);
            return;
        }
        if (validNames.includes(input)) {
            playerName = input.charAt(0).toUpperCase() + input.slice(1);
            content.innerHTML = `
                <p>Ah, ${playerName}... La nostalgie est palpable. Mes yeux (les chauve-souris) te reconnaissent.</p>
            `;

            let btn1 = document.createElement('button');
            btn1.textContent = "1 : Je toque poliment à la grande porte";
            btn1.addEventListener('click', () => cellsScene('toque'));
            content.appendChild(btn1);
            content.appendChild(document.createElement('br'));

            let btn2 = document.createElement('button');
            btn2.textContent = "2 : Je me jette dans les douves pleines de merde, empli de nostalgie";
            btn2.addEventListener('click', () => cellsScene('douves'));
            content.appendChild(btn2);
        } else {
            content.innerHTML = `
                <p>Nom inconnu... Mes chauve-souris te snobent. Réessaie, gueux oublié.</p>
            `;

            let btn = document.createElement('button');
            btn.textContent = "Retour";
            btn.addEventListener('click', choice1);
            content.appendChild(btn);
        }
    }

    function cellsScene(choice) {
        let introText = choice === 'toque' ? "Tu toques... la porte s'ouvre brutalement et tu tombes dans les oubliettes. Classique." : "Plouf ! Douves glacées et puantes. Tu rampes, couvert de merde nostalgique, jusqu'aux cellules.";
        content.innerHTML = `
            <p>${introText}<br><br>
            Tu te réveilles à l'étage -6, enchaîné avec les autres gueux. Les torches crépitent, les chaînes grincent...<br>
            L'aventure recommence vraiment maintenant, ${playerName}.</p>
        `;

        let btn = document.createElement('button');
        btn.textContent = "Continuer vers le -5 (Edge Lord incoming...)";
        btn.addEventListener('click', nextScene);
        content.appendChild(btn);
    }

    function nextScene() {
        content.innerHTML = `
            <p>À suivre bientôt : Combat contre l'Edge Lord qui pue la Monster et RedBull, le labo avec potions wtf et cape emo stylée, le journal intime du crush toxique sur Satanae, Ganondorf charcuté par Link, la cuisine heal avec chien en armure amadoué, les quartiers privés, le big fight hall, et le boss secret "La Source du Mal" mi-femme mi-IA cosmique !<br><br>
            Joyeux Noël PAS normal 2025, les gueux ! 🧛‍♂️🎄🩸</p>
        `;

        let btn = document.createElement('button');
        btn.textContent = "Rejouer";
        btn.addEventListener('click', startGame);
        content.appendChild(btn);
    }

    // Démarrage
    content.innerHTML = '<p>Clique n\'importe où pour ouvrir la lettre...</p>';
    document.body.onclick = startGame;
});
