# YouTube Search
Simple package to search data on YouTube.

# Note
Right now, this package only supports video search.

# Todo
- add more search type
- return better response
- typings
- tests
- better examples
- others

# Example

```js
const YouTube = require("youtube-sr");

YouTube.search("indila last dance", { limit: 4 })
    .then(console.log);

```

## Response

```js
[
  {
    id: 'K5KAc5CoCuk',
    url: 'https://www.youtube.com/watch?v=K5KAc5CoCuk',
    title: 'Indila - Dernière Danse (Clip Officiel)',
    duration: 215000,
    thumbnail: {
      url: 'https://i.ytimg.com/vi/K5KAc5CoCuk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBBognlttPrCx9VCmx6P_nSW2LREw',
      height: 404,
      width: 720
    },
    channel: {
      id: 'UCX4EBb-NmxyntI0mQAErHvQ',
      name: 'Indila',
      url: 'https://www.youtube.com/channel/UCX4EBb-NmxyntI0mQAErHvQ',
      icon: [Object]
    },
    uploadDate: '6 वर्ष अघि',
    views: '671848915',
    type: 'video'
  },
  {
    id: '1ox1GvNiwtc',
    url: 'https://www.youtube.com/watch?v=1ox1GvNiwtc',
    title: 'Indila - dernière danse (last dance) english lyrics',
    duration: 213000,
    thumbnail: {
      url: 'https://i.ytimg.com/vi/1ox1GvNiwtc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDVTH3SyGIvvPWm-zcDT3X1uEZ7cQ',
      height: 404,
      width: 720
    },
    channel: {
      id: 'UCzgz8LIN-qjjVEqjKWGktiw',
      name: 'Freegs Box',
      url: 'https://www.youtube.com/user/medpks',
      icon: [Object]
    },
    uploadDate: '6 वर्ष अघि',
    views: '1886782',
    type: 'video'
  },
  {
    id: '8wkHr6Hvnuk',
    url: 'https://www.youtube.com/watch?v=8wkHr6Hvnuk',
    title: 'Dernière danse — Диана Анкудинова',
    duration: 330000,
    thumbnail: {
      url: 'https://i.ytimg.com/vi/8wkHr6Hvnuk/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCcMI4WAbnTBUhWeF8-8ChyV_5EDw',
      height: 270,
      width: 480
    },
    channel: {
      id: 'UCsA_vkmuyIRlYYXeJueyIJQ',
      name: 'НТВ',
      url: 'https://www.youtube.com/user/ntvru',
      icon: [Object]
    },
    uploadDate: '1 वर्ष अघि',
    views: '29406207',
    type: 'video'
  },
  {
    id: 'htLldwywt_k',
    url: 'https://www.youtube.com/watch?v=htLldwywt_k',
    title: '|Joker| Indila - Dernière Danse (Official Video)',
    duration: 183000,
    thumbnail: {
      url: 'https://i.ytimg.com/vi/htLldwywt_k/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAYMZwyLKO35xObQRI5PqEluBXCUg',
      height: 270,
      width: 480
    },
    channel: {
      id: 'UCMusThdIP7oONGRgdcudVWA',
      name: 'Trap Music',
      url: 'https://www.youtube.com/channel/UCMusThdIP7oONGRgdcudVWA',
      icon: [Object]
    },
    uploadDate: '8 महिना पहिले',
    views: '575661',
    type: 'video'
  }
]

```

# Join my discord server
**[https://discord.gg/2SUybzb](https://discord.gg/2SUybzb)**