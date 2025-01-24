const dummyPlayerData = {
    players: [
      {
        name: "Rainier",
        isHost: true,
        icons: {
          crown: true,
          eye: true,
          cog: true,
        },
        isReady: true,
      },
      {
        name: "Pat",
        isHost: false,
        icons: {
          crown: false,
          eye: true,
          cog: true,
        },
        isReady: false,
      },
      {
        name: "Shay",
        isHost: false,
        icons: {
          crown: false,
          eye: true,
          cog: true,
        },
        isReady: true,
      },
      {
        name: "Brandon",
        isHost: false,
        icons: {
          crown: false,
          eye: true,
          cog: true,
        },
        isReady: false,
      },
    ],
    spectators: [
        {
            name: "Joe",
            isHost: false,
            icons: {
                eye: true
            }
        },
        {
            name: "Matt",
            isHost: false,
            icons: {
                eye: true
            }
        },
        {
            name: "Vincnet",
            isHost: false,
            icons: {
                eye: true
            }
        }
    ]
  };
  
  export default dummyPlayerData;