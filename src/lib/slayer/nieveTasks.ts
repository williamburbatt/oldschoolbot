const nieveTasks = [
	{
		name: 'Aberrant spectre',
		amount: [120, 185],
		extendedAmount: [200, 250],
		requirements: {
			slayerLevel: 60,
			combatLevel: 65
		},
		alternatives: ['Deviant spectres'],
		weight: 6
	},
	{
		name: 'Abyssal demon',
		amount: [120, 185],
		extendedAmount: [200, 250],
		requirements: {
			slayerLevel: 85,
			combatLevel: 85
		},
		alternatives: ['Abyssal sire', 'Greater abyssal demon'],
		weight: 9
	},
	{
		name: 'Adamant dragon',
		amount: [3, 7],
		extendedAmount: [20, 30],
		requirements: {
			questPoints: 35
		},
		alternatives: [],
		weight: 2
	},
	{
		name: 'Ankou',
		amount: [50, 90],
		extendedAmount: [90, 150],
		requirements: {
			combatLevel: 40
		},
		alternatives: ['Dark Ankou'],
		weight: 5
	},
	{
		name: 'Aviansie',
		amount: [120, 185],
		extendedAmount: [130, 250],
		requirements: {
			unlocked: [10]
		},
		alternatives: [
			"Kree'arra",
			'Flight Kilisa',
			'Flockleader Geerin',
			'Wingman Skree',
			'Reanimated aviansie'
		],
		weight: 6
	},
	{
		name: 'Basilisk',
		amount: [120, 180],
		extendedAmount: [200, 250],
		requirements: {
			slayerLevel: 40,
			unlocked: [25]
		},
		alternatives: ['Basilisk Knight'],
		weight: 6
	},
	{
		name: 'Black demons',
		amount: [120, 185],
		extendedAmount: [200, 250],
		requirements: {
			combatLevel: 80
		},
		alternatives: ['Demonic gorillas', 'Balfrug Kreeyath', 'Porazdir', 'Skotizo'],
		weight: 9
	},
	{
		name: 'Black dragons',
		amount: [10, 20],
		extendedAmount: [40, 60],
		requirements: {
			combatLevel: 80,
			questPoints: 32
		},
		alternatives: ['Baby black dragons', 'King Black Dragon', 'Brutal black dragons'],
		weight: 6
	},
	{
		name: 'Bloodvelds',
		amount: [120, 185],
		extendedAmount: [200, 250],
		requirements: {
			combatLevel: 50,
			slayerLevel: 50
		},
		alternatives: ['Mutated Bloodveld'],
		weight: 9
	},
	{
		name: 'Blue dragons',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			combatLevel: 65,
			questPoints: 32
		},
		alternatives: ['Baby blue dragons', 'Brutal blue dragons', 'Vorkath'],
		weight: 4
	},
	{
		name: 'Boss',
		amount: [3, 20],
		extendedAmount: null,
		requirements: {
			unlocked: [13]
		},
		alternatives: [],
		weight: 8
	},
	{
		name: 'Brine rat',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			combatLevel: 45,
			slayerLevel: 47,
			questPoints: 5
		},
		alternatives: [],
		weight: 3
	},
	{
		name: 'Cave horror',
		amount: [120, 180],
		extendedAmount: [200, 250],
		requirements: {
			combatLevel: 85,
			slayerLevel: 58,
			questPoints: 15
		},
		alternatives: [],
		weight: 5
	},
	{
		name: 'Cave kraken',
		amount: [100, 120],
		extendedAmount: [150, 200],
		requirements: {
			combatLevel: 80,
			slayerLevel: 87,
			magicLevel: 50
		},
		alternatives: 'Kraken',
		weight: 6
	},
	{
		name: 'Dagannoth',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			combatLevel: 75,
			questPoints: 3
		},
		alternatives: ['Dagannoth spawn', 'Dagannoth fledgeling', 'Dagannoth Kings'],
		weight: 8
	},
	{
		name: 'Dark beasts',
		amount: [10, 20],
		extendedAmount: [100, 150],
		requirements: {
			slayerLevel: 90,
			combatLevel: 90,
			questPoints: 24
		},
		alternatives: [],
		weight: 5
	},
	{
		name: 'Drakes',
		amount: '30-95',
		extendedAmount: null,
		requirements: {
			slayerLevel: 84
		},
		alternatives: [],
		weight: 7
	},
	{
		name: 'Dust devils',
		amount: [120, 185],
		extendedAmount: [200, 250],
		requirements: {
			combatLevel: 70,
			questPoints: 15,
			slayerLevel: 65
		},
		alternatives: [],
		weight: 6
	},
	{
		name: 'Elves',
		amount: [60, 90],
		extendedAmount: null,
		requirements: {
			combatLevel: 70,
			questPoints: 30
		},
		alternatives: ['Elf warrior', 'mourner', 'Reanimated elf'],
		weight: 4
	},
	{
		name: 'Fire giants',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			combatLevel: 65
		},
		alternatives: [],
		weight: 9
	},
	{
		name: 'Fossil Island Wyverns',
		amount: [20, 60],
		extendedAmount: [55, 75],
		requirements: {
			combatLevel: 60,
			slayerLevel: 66,
			questPoints: 10
		},
		alternatives: ['Spitting, taloned and long-tailed wyvern', 'Ancient Wyvern'],
		weight: 5
	},
	{
		name: 'Gargoyles',
		amount: [120, 185],
		extendedAmount: [200, 250],
		requirements: {
			combatLevel: 80,
			slayerLevel: 75,
			questPoints: 3
		},
		alternatives: ['Grotesque Guardians'],
		weight: 6
	},
	{
		name: 'Greater demons',
		amount: [120, 185],
		extendedAmount: [150, 200],
		requirements: {
			combatLevel: 75
		},
		alternatives: ["K'ril Tsutsaroth", 'Tstanon Karlak', 'Skotizo'],
		weight: 7
	},
	{
		name: 'Hellhounds',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			combatLevel: 75
		},
		alternatives: ['Cerberus', 'Skeleton Hellhound', 'Greater Skeleton Hellhound'],
		weight: 8
	},
	{
		name: 'Iron dragons',
		amount: [30, 60],
		extendedAmount: [60, 100],
		requirements: {
			questPoints: 32,
			combatLevel: 80
		},
		alternatives: [],
		weight: 5
	},
	{
		name: 'Kalphites',
		amount: [120, 185],
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
		weight: 9
	},
	{
		name: 'Kurask',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			slayerLevel: 70,
			combatLevel: 65
		},
		alternatives: [],
		weight: 3
	},
	{
		name: 'Lizardmen',
		amount: [90, 120],
		extendedAmount: null,
		requirements: {
			unlocked: [12]
		},
		alternatives: ['Lizardman brute', 'Lizardman shaman'],
		weight: 8
	},
	{
		name: 'Minions of Scabaras',
		amount: [30, 60],
		extendedAmount: [130, 170],
		requirements: {
			combatLevel: 85,
			questPoints: 13
		},
		alternatives: ['Scarabs', 'scarab swarms', 'locust riders', 'scarab mages'],
		weight: 4
	},
	{
		name: 'Mithril dragons',
		amount: [4, 9],
		extendedAmount: [20, 40],
		requirements: {
			unlocked: [9]
		},
		alternatives: [],
		weight: 5
	},
	{
		name: 'Mutated Zygomites',
		amount: [10, 25],
		extendedAmount: null,
		requirements: {
			combatLevel: 60,
			slayerLevel: 57,
			questPoints: 2
		},
		alternatives: ['Ancient Zygomite'],
		weight: 2
	},
	{
		name: 'Nechryael',
		amount: [110, 170],
		extendedAmount: [200, 250],
		requirements: {
			combatLevel: 85,
			slayerLevel: 80
		},
		alternatives: ['Greater Nechryael'],
		weight: 7
	},
	{
		name: 'Red dragons',
		amount: [30, 80],
		extendedAmount: null,
		requirements: {
			combatLevel: 68,
			questPoints: 32,
			unlocked: [8]
		},
		alternatives: ['Baby red dragons', 'Brutal red dragons'],
		weight: 5
	},
	{
		name: 'Rune dragon',
		amount: [3, 6],
		extendedAmount: [30, 60],
		requirements: {
			questPoints: 205
		},
		alternatives: [],
		weight: 2
	},
	{
		name: 'Skeletal Wyverns',
		amount: [5, 15],
		extendedAmount: [50, 70],
		requirements: {
			combatLevel: 70,
			questPoints: 2,
			slayerLevel: 72
		},
		alternatives: [],
		weight: 5
	},
	{
		name: 'Smoke devil',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			combatLevel: 85,
			slayerLevel: 93
		},
		alternatives: ['Thermonuclear smoke devil'],
		weight: 7
	},
	{
		name: 'Spiritual creatures',
		amount: [120, 185],
		extendedAmount: [180, 250],
		requirements: {
			combatLevel: 60,
			questPoints: 2,
			slayerLevel: 63,
			strengthLevel: 60,
			agilityLevel: 60
		},
		alternatives: ['Spiritual mage', 'Spiritual ranger', 'Spiritual warrior'],
		weight: 6
	},
	{
		name: 'Steel dragons',
		amount: [30, 60],
		extendedAmount: [40, 60],
		requirements: {
			combatLevel: 85,
			questPoints: 32
		},
		alternatives: [],
		weight: 5
	},
	{
		name: 'Suqah',
		amount: [120, 185],
		extendedAmount: [180, 250],
		requirements: {
			combatLevel: 85,
			questPoints: 20
		},
		alternatives: [],
		weight: 8
	},
	{
		name: 'Trolls',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			combatLevel: 60
		},
		alternatives: ['Mountain troll', 'Ice troll', 'Troll general'],
		weight: 6
	},
	{
		name: 'Turoth',
		amount: [120, 185],
		extendedAmount: null,
		requirements: {
			slayerLevel: 55,
			combatLevel: 60
		},
		alternatives: [],
		weight: 3
	},
	{
		name: 'TzHaar',
		amount: [110, 180],
		extendedAmount: null,
		requirements: {
			unlocked: [11]
		},
		alternatives: ['TzTok-Jad', 'TzKal-Zuk'],
		weight: 10
	},
	{
		name: 'Wyrms',
		amount: [80, 145],
		extendedAmount: null,
		requirements: {
			slayerLevel: 62
		},
		alternatives: [],
		weight: 7
	}
];

export default nieveTasks;
