window.onload = function() {
    const validNames = ["comor subite", "aimba paix", "gauvain dumons", "ade madeleine", "paul m'ploie", "edmond deminui", "conrad ducloche"];

    let playerName = '';

    function showModal(text, buttons = []) {
        let html = '<p>' + text + '</p>';
        if (buttons.length > 0) {
            html += buttons.map(b => '<button onclick="' + b.action + '">' + b.text + '</button>').join('<br>');
        }
        document.getElementById('modal-content').innerHTML = html;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('screen').style.cursor = 'default';
        document.getElementById('screen').onclick = null;
    }

    // Démarrage : Lettre gothique sceau rouge chandelles
    document.getElementById('screen').style.backgroundImage = "url('https://images.stockcake.com/public/1/5/4/1547a71b-398a-44c2-8392-b496bbb51b77_large/sealed-letter-exchange-stockcake.jpg')";
    document.getElementById('screen').onclick = function() {
        let music = document.getElementById('bgMusic');
        music.play().catch(() => {});
        showModal('Cher Gueux de 2023,<br><br>En cette nuit de Noël 2025, deux ans après votre évasion légendaire...<br>Le Château de Satanae vous appelle une dernière fois. Des récompenses ? Des pièges ? De la nostalgie ?<br><br>Venez, si vous osez revivre l\'horreur festive.<br><br>Signé,<br>Dr. Amadeus 🧛‍♂️❄️🩸', [
            {text: "1 : J\'écoute l\'appel du risque et me rends au château, empli de nostalgie", action: "castleScene()"},
            {text: "2 : Je m\'en balec, je chiffonne le papier et le jette", action: "badEnd()"}
        ]);
    };

    function badEnd() {
        showModal('Tu chiffonnes la lettre... et rates l\'aventure. Joyeux Noël solitaire, gueux pathétique ! 🎄😭<br><button onclick="location.reload()">Recommencer</button>');
    }

    function castleScene() {
        document.getElementById('modal').classList.add('hidden');
        document.getElementById('screen').style.backgroundImage = "url('https://t4.ftcdn.net/jpg/13/12/41/41/360_F_1312414197_PM6IGNHM4GK8RD7R0BuzyN3iIV4F7iAe.jpg')";
        showModal('Le château se dresse, enneigé et menaçant sous la lune rouge.<br><br>Entre ton nom de gueux d\'Halloween 2023 pour que mes chauve-souris te reconnaissent :<br><input type="text" id="nameInput" placeholder="Ex: Comor Subite"><br><button onclick="checkName()">Valider mon destin</button>');
    }

    function checkName() {
        let input = document.getElementById('nameInput').value.trim().toLowerCase();
        if (input === "amadeus") {
            showModal('#JyCroisMoyen<br>Tu n\'es pas moi, imposteur ! Mes chauve-souris t\'attaquent. 💀<br><button onclick="castleScene()">Réessayer</button>');
            return;
        }
        if (validNames.includes(input)) {
            playerName = input.charAt(0).toUpperCase() + input.slice(1);
            showModal('Ah, ' + playerName + '... La nostalgie est palpable. Mes yeux (les chauve-souris) te reconnaissent.<br><br>Que fais-tu ?', [
                {text: "1 : Je toque poliment à la grande porte", action: "cellsScene('toque')"},
                {text: "2 : Je me jette dans les douves pleines de merde, empli de nostalgie", action: "cellsScene('douves')"}
            ]);
        } else {
            showModal('Nom inconnu... Mes chauve-souris te snobent. Réessaie, gueux oublié.<br><button onclick="castleScene()">Retour</button>');
        }
    }

    function cellsScene(choice) {
        document.getElementById('modal').classList.add('hidden');
        document.getElementById('screen').style.backgroundImage = "url('https://t4.ftcdn.net/jpg/13/12/41/41/360_F_1312414197_PM6IGNHM4GK8RD7R0BuzyN3iIV4F7iAe.jpg')";
        let introText = choice === 'toque' ? "Tu toques... la porte s\'ouvre brutalement et tu tombes dans les oubliettes. Classique." : "Plouf ! Douves glacées et puantes. Tu rampes, couvert de merde nostalgique, jusqu\'aux cellules.";
        showModal(introText + '<br><br>Tu te réveilles à l\'étage -6, enchaîné avec les autres gueux. Les torches crépitent, les chaînes grincent...<br>L\'aventure recommence vraiment maintenant, ' + playerName + '.<br><br><button onclick="nextScene()">Continuer vers le -5 (Edge Lord incoming...)</button><br><button onclick="location.reload()">Rejouer</button>');
    }

    function nextScene() {
        showModal('À suivre bientôt : Combat contre l\'Edge Lord qui pue la Monster et RedBull, le labo avec potions wtf et cape emo stylée, le journal intime du crush toxique sur Satanae, Ganondorf charcuté par Link, la cuisine heal avec chien en armure amadoué, les quartiers privés, le big fight hall, et le boss secret "La Source du Mal" mi-femme mi-IA cosmique !<br><br>Joyeux Noël PAS normal 2025, les gueux ! 🧛‍♂️🎄🩸<br><button onclick="location.reload()">Rejouer</button>');
    }
};
