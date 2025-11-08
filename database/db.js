const blagues = [
  { id: 1, texte: 'Quelle est la femelle du hamster ? L\'Amsterdam.'},
  { id: 2, texte: 'Que dit un oignon quand il se cogne ? Aïe !' },
  { id: 3, texte: 'Quel est l\'animal le plus heureux ? Le hibou, parce que sa femme est chouette.' },
  { id: 4, texte: 'Pourquoi le football c\'est rigolo ? Parce que Thierry en rit.' },
  { id: 5, texte: 'Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.' },
  { id: 6, texte: 'Que se fait un Schtroumpf quand il tombe ? Un Bleu.' },
  { id: 7, texte: 'Quel est le comble pour un marin ? Avoir le nez qui coule.' },
  { id: 8, texte: 'Qu\'est ce que les enfants usent le plus à l\'école ? Le professeur.' },
  { id: 9, texte: 'Quel est le sport le plus silencieux ? Le para-chuuuut.' },
  { id: 10, texte: 'Quel est le comble pour un joueur de bowling ? C\'est de perdre la boule.' },
  { id: 11, texte: 'Que dit un citron cambrioleur ? Plus un zeste !' },
]

async function getBlagueById(id) {
  return blagues.find(blague => blague.id === id)
}

module.exports = { getBlagueById }
