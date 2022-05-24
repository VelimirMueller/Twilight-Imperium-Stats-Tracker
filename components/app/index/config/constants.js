/**
 * @TODO: implement something cool
 */
const CONFIG = {
  // Stats
  stats: {
    globalStats: [
      {
        name: 'Gespielte Sessions',
        stat: '0'
      },
      {
        name: 'Ø Punktzahl',
        stat: '0'
      },
      {
        name: 'Längste Siegsträhne',
        stat: '0'
      }
    ],

    fractionStats: [
      {
        name: 'Meistgespielteste Fraktion',
        stat: '-'
      },
      {
        name: 'Weltraumtyrann',
        stat: '-'
      },
      {
        name: 'Am meisten Ehre',
        stat: '-'
      }
    ]
  },
  //END Stats

  // Text
  text: {
    largeHero: {
      hero: {
        headline: 'Twilight Imperium',
        subHeadline: 'Stats Tracker',
        paragraph: 'Finde heraus mit welchen Fraktionen du am besten bist, welche Spieler am gefährlichsten sind und schmiede geheime Bündnisse'
      },
      button: {
        login: 'Login',
        register: 'Registrieren'
      }
    },

    votedStats: {
      headline: 'Vote für deine Lieblingsstatistiken',
      subHeadline: 'Deine Entscheidungen beeinflussen welche Inhalte angezeigt werden.'
    },

    lastGames: {
      headline: 'Deine Entscheidungen beeinflussen welche Inhalte angezeigt werden.',
      subHeadline: 'Lerne aus vorherigen Spielen',
      participants: 'Mitspieler:',
      secondPlace: 'Zweiter Platz:',
      mvp: 'Am meisten Punkte:',
      points: 'Punkte:'
    }
  },

  cards: {
    lastGames: {
      paths: [
        '/img/the-emirates-of-hacan.png',
        '/img/the-mahact-gene-sorcerers.png',
        '/img/the-yin-brotherhood.png',
        '/img/the-l1z1x-mindnet.png'
      ]
    }
  }
  //END Text
}

export {
  CONFIG
}
