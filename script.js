document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const title = document.getElementById('title');

    const validNames = ["comor subite", "aimba paix", "gauvain dumons", "ade madeleine", "paul m'ploie", "edmond deminui", "conrad ducloche"];

    let playerName = '';

    function clearContent() {
        content.innerHTML = '';
    }

    function addText(text) {
        const p = document.createElement('p');
        p.innerHTML = text;
        content.appendChild(p);
    }

    function addButton(text, action) {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.addEventListener('click', action);
        content.appendChild(btn);
        content.appendChild(document.createElement('br'));
    }

    function startGame() {
        title.innerText = "L'Invitation du Dr. Amadeus";
        clearContent();
        addText('Cher Gueux de 2023,<br><br>En cette nuit de Noël 2025, deux ans après votre évasion légendaire...<br>Le Château de Satanae vous appelle une dernière fois. Des récompenses ? Des pièges ? De la nostalgie ?<br><br>Venez, si vous osez revivre l\'horreur festive.<br><br>Signé,<br>Dr. Amadeus 🧛‍♂️❄️🩸');
        addButton("1 : J'écoute l'appel du risque et me rends au château, empli de nostalgie", choice1);
        addButton("2 : Je m'en balec, je chiffonne le papier et le jette", badEnd);
    }

    function badEnd() {
        clearContent();
        addText('Tu chiffonnes la lettre... et rates l\'aventure. Joyeux Noël solitaire, gueux pathétique ! 🎄😭');
        addButton("Recommencer", startGame);
    }

    function choice1() {
        title.innerText = "Aux Portes du Château";
        clearContent();
        addText('Le château se dresse, enneigé et menaçant sous la lune rouge.<br><br>Entre ton nom de gueux d\'Halloween 2023 pour que mes chauve-souris te reconnaissent :');
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'nameInput';
        input.placeholder = 'Ex: Comor Subite';
        content.appendChild(input);
        content.appendChild(document.createElement('br'));
        addButton("Valider mon destin", checkName);
    }

    function checkName() {
        const input = document.getElementById('nameInput').value.trim().toLowerCase();
        clearContent();
        if (input === "amadeus") {
            addText('#JyCroisMoyen<br>Tu n\'es pas moi, imposteur ! Mes chauve-souris t\'attaquent. 💀');
            addButton("Réessayer", choice1);
            return;
        }
        if (validNames.includes(input)) {
            playerName = input.charAt(0).toUpperCase() + input.slice(1);
            addText('Ah, ' + playerName + '... La nostalgie est palpable. Mes yeux (les chauve-souris) te reconnaissent.<br><br>Que fais-tu ?');
            addButton("1 : Je toque poliment à la grande porte", () => cellsScene('toque'));
            addButton("2 : Je me jette dans les douves pleines de merde, empli de nostalgie", () => cellsScene('douves'));
        } else {
            addText('Nom inconnu... Mes chauve-souris te snobent. Réessaie, gueux oublié.');
            addButton("Retour", choice1);
        }
    }

    function cellsScene(choice) {
        clearContent();
        let introText = choice === 'toque' ? "Tu toques... la porte s'ouvre brutalement et tu tombes dans les oubliettes. Classique." : "Plouf ! Douves glacées et puantes. Tu rampes, couvert de merde nostalgique, jusqu'aux cellules.";
        addText(introText + '<br><br>Tu te réveilles à l\'étage -6, enchaîné avec les autres gueux. Les torches crépitent, les chaînes grincent...<br>L\'aventure recommence vraiment maintenant, ' + playerName + '.');
        addButton("Continuer vers le -5 (Edge Lord incoming...)", nextScene);
    }

    function nextScene() {
        clearContent();
        addText('À suivre bientôt : Combat contre l\'Edge Lord qui pue la Monster et RedBull, le labo avec potions wtf et cape emo stylée, le journal intime du crush toxique sur Satanae, Ganondorf charcuté par Link, la cuisine heal avec chien en armure amadoué, les quartiers privés, le big fight hall, et le boss secret "La Source du Mal" mi-femme mi-IA cosmique !<br><br>Joyeux Noël PAS normal 2025, les gueux ! 🧛‍♂️🎄🩸');
        addButton("Rejouer", startGame);
    }

    // Démarrage
    content.innerHTML = '<p>Clique n\'importe où pour ouvrir la lettre...</p>';
    document.body.onclick = startGame;
});
