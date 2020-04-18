import { Emoji } from '../../constants';
import { Thievable, SkillsEnum } from '../types';

const thievable: Thievable[] = [
	{
		name: 'Man',
		aliases: ['man'],
		level: 1,
        xp: 8,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
    },
    {
		name: 'Woman',
		aliases: ['woman'],
		level: 1,
        xp: 8,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Farmer',
		aliases: ['farmer'],
		level: 10,
        xp: 14.5,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Female H.A.M. Member',
        aliases: ['female ham memeber'],
		level: 15,
        xp: 18.5,
        stunTime: 4,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Male H.A.M. Member',
        aliases: ['male ham memeber'],
		level: 20,
        xp: 22.5,
        stunTime: 4,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Warrior',
		aliases: ['warrior'],
		level: 25,
        xp: 26,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Rogue',
		aliases: ['rogue'],
		level: 32,
        xp: 35.5,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: `Cave Goblin`,
		aliases: ['cave goblin'],
		level: 36,
        xp: 40,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Master Farmer',
		aliases: ['master farmer'],
		level: 38,
        xp: 43,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Guard',
		aliases: ['guard'],
		level: 40,
        xp: 46.8,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Fremennik Citizen',
		aliases: ['fremennik citizen'],
		level: 45,
        xp: 65,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
    },
    {
		name: 'Bearded Pollnivnian Bandit',
		aliases: ['bearded pollnivnian bandit'],
		level: 45,
        xp: 65,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
    },
    {
		name: 'Desert Bandit',
		aliases: ['desert bandit'],
		level: 53,
        xp: 79.5,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Knight of Ardougne',
		aliases: ['knight of ardougne'],
		level: 55,
        xp: 84.3,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Pollnivian Bandit',
        aliases: ['Pollnivian Bandit'],
		level: 55,
        xp: 84.3,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Yanille Watchman',
        aliases: ['yanille watchman'],
		level: 65,
        xp: 137.5,
        stunTime: 5,
        respawnTime : 1,
		petChance: 134_625
	},
	{
		name: 'Menaphite Thug',
		aliases: ['menaphite thug'],
		level: 65,
        xp: 137.5,
        stunTime: 5,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Paladin',
		aliases: ['paladin'],
		level: 70,
        xp: 151.7,
        stunTime: 5,
        respawnTime : 1,
		petChance: 127_056
	},
	{
		name: `Gnome`,
		aliases: ['gnome'],
		level: 75,
        xp: 198.5,
        stunTime: 6,
        respawnTime : 1,
		petChance: 108_718
	},
	{
		name: 'Hero',
		aliases: ['hero'],
		level: 80,
        xp: 275,
        stunTime: 6,
        respawnTime : 1,
		petChance: 99_175
	},
	{
		name: 'Elf',
		aliases: ['elf'],
		level: 85,
        xp: 353,
        stunTime: 5,
        respawnTime : 1,
		petChance: 99_175
	},
	{
		name: 'TzHaar-Hur',
		aliases: ['tzHaar-hur'],
		level: 90,
        xp: 103.4,
        stunTime: 5,
        respawnTime : 1,
        petChance: 176_743
    },
    {
		name: 'Vegetable Stall',
		aliases: ['vegetable stall'],
		level: 2,
        xp: 10,
        stunTime: 0,
        respawnTime : 2,
		petChance: 206_777
    },
    {
		name: 'Bakery Stall',
		aliases: ['bakery stall'],
		level: 5,
        xp: 16,
        stunTime: 0,
        respawnTime : 2,
		petChance: 124_066
	},
	{
		name: 'Crafting Stall',
		aliases: ['crafting stall'],
		level: 5,
        xp: 16,
        stunTime: 0,
        respawnTime : 7,
		petChance: 47_718
	},
	{
		name: 'Monkey Food Stall',
        aliases: ['monkey food stall'],
		level: 5,
        xp: 16,
        stunTime: 0,
        respawnTime : 7,
		petChance: 47_718
	},
	{
		name: 'Monkey General Stall',
        aliases: ['monkey general stall'],
		level: 5,
        xp: 16,
        stunTime: 0,
        respawnTime : 7,
		petChance: 47_718
	},
	{
		name: 'Tea Stall',
		aliases: ['tea stall'],
		level: 5,
        xp: 16,
        stunTime: 0,
        respawnTime : 7,
		petChance: 47_718
	},
	{
		name: 'Silk Stall',
		aliases: ['silk stall'],
		level: 20,
        xp: 24,
        stunTime: 0,
        respawnTime : 5,
		petChance: 68_926
	},
	{
		name: `Wine Stall`,
		aliases: ['wine stall'],
		level: 22,
        xp: 27,
        stunTime: 0,
        respawnTime : 10,
		petChance: 36_490
	},
	{
		name: 'Fruit Stall',
		aliases: ['fruit stall'],
		level: 25,
        xp: 28.2,
        stunTime: 0,
        respawnTime : 2,
		petChance: 124_066
	},
	{
		name: 'Seed Stall',
		aliases: ['seed stall'],
		level: 27,
        xp: 10,
        stunTime: 0,
        respawnTime : 9,
		petChance: 36_490
	},
	{
		name: 'Fur Stall',
		aliases: ['fur stall'],
		level: 35,
        xp: 36,
        stunTime: 0,
        respawnTime : 10,
		petChance: 36_490
    },
    {
		name: 'Fish Stall',
		aliases: ['fish stall'],
		level: 42,
        xp: 42,
        stunTime: 0,
        respawnTime : 10,
		petChance: 36_490
    },
    {
		name: 'Crossbow Stall',
		aliases: ['crossbow stall'],
		level: 49,
        xp: 52,
        stunTime: 0,
        respawnTime : 9,
		petChance: 36_490
	},
	{
		name: 'Silver Stall',
		aliases: ['silver stall'],
		level: 50,
        xp: 54,
        stunTime: 0,
        respawnTime : 30,
		petChance: 36_490
	},
	{
		name: 'Spice Stall',
        aliases: ['spice stall'],
		level: 65,
        xp: 81,
        stunTime: 0,
        respawnTime : 80,
		petChance: 36_490
	},
	{
		name: 'Magic Stall',
        aliases: ['magic stall'],
		level: 65,
        xp: 100,
        stunTime: 0,
        respawnTime : 80,
		petChance: 36_490
	},
	{
		name: 'Scimitar Stall',
		aliases: ['scimitar stall'],
		level: 65,
        xp: 160,
        stunTime: 0,
        respawnTime : 80,
		petChance: 36_490
	},
	{
		name: 'Gem Stall',
		aliases: ['gem stall'],
		level: 75,
        xp: 160,
        stunTime: 0,
        respawnTime : 180,
		petChance: 36_490
	},
	{
		name: `Ore Stall`,
		aliases: ['ore stall'],
		level: 82,
        xp: 180,
        stunTime: 0,
        respawnTime : 60,
		petChance: 36_490
	}
];

const Thieving = {
	aliases: ['thieving'],
	Thievable: thievable,
	id: SkillsEnum.Thieving,
	emoji: Emoji.Agility
};

export default Thieving;