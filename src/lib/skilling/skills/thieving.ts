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
        aliases: ['female ham memeber','Female ham member','female ham'],
		level: 15,
        xp: 18.5,
        stunTime: 4,
        respawnTime : 1,
		petChance: 257_211
	},
	{
		name: 'Male H.A.M. Member',
        aliases: ['male ham memeber','Male ham member','male ham'],
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
		aliases: ['rel', 'rellekka'],
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
	}
];

const Thieving = {
	aliases: ['thieving'],
	Thievable: thievable,
	id: SkillsEnum.Thieving,
	emoji: Emoji.Agility
};

export default Thieving;