const turaelTasks = [
	{
		name: 'Banshees',
		amount: [15, 20],
		categories: ['banshee'],
		extendedAmount: null,
		requirements: {
			combatLevel: 20,
			slayerLevel: 15
		},
		alternatives: ['Twisted Banshee'],
		weight: 8
	},
	{
		name: 'Bats',
		amount: [15, 20],
		categories: ['bat'],
		extendedAmount: null,
		requirements: {
			combatLevel: 5
		},
		alternatives: ['Giant bat', 'Deathwing'],
		weight: 7
	},
	{
		name: 'Birds',
		amount: [15, 20],
		categories: ['bird'],
		extendedAmount: null,
		requirements: [],
		alternatives: [
			'Chicken',
			'Mounted terrorbird',
			'Terrorbird',
			'Rooster',
			'Chompy bird',
			'Seagull',
			'Penguin',
			'Duck',
			'Duckling'
		],
		weight: 6
	},
	{
		name: 'Bears',
		amount: [15, 20],
		categories: ['bear'],
		extendedAmount: null,
		requirements: {
			combatLevel: 13
		},
		alternatives: ['Grizzly bear cub', 'Bear cub', 'Grizzly bear', 'Callisto'],
		weight: 7
	},
	{
		name: 'Cave bugs',
		amount: [10, 20],
		categories: ['cave bug'],
		extendedAmount: null,
		requirements: {
			slayerLevel: 7
		},
		alternatives: [],
		weight: 8
	},
	{
		name: 'Cave crawlers',
		amount: [15, 20],
		categories: ['cave crawler'],
		extendedAmount: null,
		requirements: {
			combatLevel: 10,
			slayerLevel: 10
		},
		alternatives: [],
		weight: 8
	},
	{
		name: 'Cave slime',
		amount: [10, 20],
		extendedAmount: null,
		requirements: {
			combatLevel: 15,
			slayerLevel: 17
		},
		alternatives: [],
		weight: 8
	},
	{
		name: 'Cows',
		amount: [15, 20],
		categories: ['cow'],
		extendedAmount: null,
		requirements: {
			combatLevel: 5
		},
		alternatives: ['Cow calf', 'Undead cow'],
		weight: 8
	},
	{
		name: 'Crawling Hands',
		amount: [15, 20],
		categories: ['crawling hand'],
		extendedAmount: null,
		requirements: {
			slayerLevel: 5,
			unlocked: []
		},
		/*
   requirements: '5 Slayer, completion of Priest in Peril",
   */
		alternatives: [],
		weight: 8
	},
	{
		name: 'Dogs',
		amount: [15, 20],
		categories: ['dog'],
		extendedAmount: null,
		requirements: {
			combatLevel: 15
		},
		alternatives: ['Jackal', 'Guard dog', 'Wild dog', 'Reanimated dog'],
		weight: 7
	},
	{
		name: 'Dwarves',
		amount: [15, 20],
		categories: ['dwarf'],
		extendedAmount: null,
		requirements: {
			combatLevel: 6
		},
		alternatives: ['Black Guard', 'Chaos Dwarf', 'Dwarf gang member'],
		weight: 7
	},
	{
		name: 'Ghosts',
		amount: [15, 20],
		categories: ['ghost'],
		extendedAmount: null,
		requirements: {
			combatLevel: 13
		},
		alternatives: ['Tortured soul'],
		weight: 7
	},
	{
		name: 'Goblins',
		amount: [15, 20],
		categories: ['goblin'],
		extendedAmount: null,
		requirements: [],
		alternatives: [
			'Cave goblin guards',
			'Sergeant Strongstack',
			'Sergeant Steelwill',
			'Sergeant Grimspike'
		],
		weight: 7
	},
	{
		name: 'Icefiends',
		amount: [15, 20],
		categories: ['icefiend'],
		extendedAmount: null,
		requirements: {
			combatLevel: 20
		},
		alternatives: [],
		weight: 8
	},
	{
		name: 'Kalphites',
		amount: [15, 20],
		categories: ['kalphite'],
		extendedAmount: null,
		requirements: {
			combatLevel: 15
		},
		alternatives: [
			'Kalphite worker',
			'Kalphite soldier',
			'Kalphite guardian',
			'Kalphite Queen'
		],
		weight: 6
	},
	{
		name: 'Lizards',
		amount: [15, 20],
		categories: ['lizard'],
		extendedAmount: null,
		requirements: {
			slayerLevel: 22
		},
		alternatives: ['Small Lizard', 'Desert Lizard', 'Sulphur Lizard'],
		weight: 8
	},
	{
		name: 'Minotaurs',
		amount: [10, 20],
		categories: ['minotaur'],
		extendedAmount: null,
		requirements: {
			combatLevel: 7
		},
		alternatives: [],
		weight: 7
	},
	{
		name: 'Monkeys',
		amount: [15, 20],
		categories: ['monkey'],
		extendedAmount: null,
		requirements: [],
		alternatives: [
			'Karamjan Monkey',
			'Monkey Guard',
			'Monkey Archer',
			'Monkey Zombie',
			'Demonic Gorilla',
			'Tortured Gorilla'
		],
		weight: 6
	},
	{
		name: 'Rats',
		amount: [15, 20],
		categories: ['rat'],
		extendedAmount: null,
		requirements: [],
		alternatives: ['Giant rat', 'Dungeon rat', 'Crypt rat', 'Brine rat'],
		weight: 7
	},
	{
		name: 'Scorpions',
		amount: [15, 20],
		categories: ['scorpion'],
		extendedAmount: null,
		requirements: {
			combatLevel: 7
		},
		alternatives: [
			'King Scorpion',
			'Poison Scorpion',
			'Pit Scorpion',
			'Scorpia',
			'Lobstrosity',
			'Reanimated scorpion'
		],
		weight: 7
	},
	{
		name: 'Skeletons',
		amount: [15, 20],
		categories: ['skeleton'],
		extendedAmount: null,
		requirements: {
			combatLevel: 15
		},
		alternatives: ['Skeleton mage', 'Skeleton', "Vet'ion", 'Skogre', 'Skeleton fremennik'],
		weight: 7
	},
	{
		name: 'Spiders',
		amount: [15, 20],
		categories: ['spider'],
		extendedAmount: null,
		requirements: [],
		alternatives: [
			'Giant spider',
			'Shadow spider',
			'Giant crypt spider',
			'Sarachnis',
			'Temple Spider',
			'Venenatis'
		],
		weight: 6
	},
	{
		name: 'Wolves',
		amount: [15, 20],
		categories: ['wolf'],
		extendedAmount: null,
		requirements: {
			combatLevel: 20
		},
		alternatives: ['Big Wolf', 'Desert Wolf', 'Ice wolf', 'Jungle wolf', 'White wolf'],
		weight: 7
	},
	{
		name: 'Zombies',
		amount: [15, 20],
		categories: ['zombie'],
		extendedAmount: null,
		requirements: {
			combatLevel: 10
		},
		alternatives: [
			'Monkey Zombie',
			'Undead chicken',
			'Undead cow',
			'Undead Druid',
			'Undead one',
			'Zombie rat',
			'Zogre',
			'Vorkath'
		],
		weight: 7
	}
];

export default turaelTasks;
