import { Emoji } from '../../constants';
import { Thievable, SkillsEnum } from '../types';

const Thievable: Thievable[] = [
	{
		name: 'Man',
		aliases: ['man'],
		level: 1,
		xp: 8,
		petChance: 35_609
    },
    {
		name: 'Woman',
		aliases: ['woman'],
		level: 1,
		xp: 8,
		petChance: 35_609
	},
	{
		name: 'Farmer',
		aliases: ['farmer'],
		level: 10,
		xp: 14.5,
		petChance: 33_005
	},
	{
		name: 'Female H.A.M. Member',
        aliases: ['female ham memeber','Female ham member','female ham'],
		level: 15,
		xp: 18.5,
		petChance: 26_648
	},
	{
		name: 'Male H.A.M. Member',
        aliases: ['male ham memeber','Male ham member','male ham'],
		level: 20,
		xp: 22.5,
		petChance: 26_648
	},
	{
		name: 'Warrior',
		aliases: ['warrior'],
		level: 25,
		xp: 26,
		petChance: 36_842
	},
	{
		name: 'Rogue',
		aliases: ['rogue'],
		level: 32,
		xp: 35.5,
		petChance: 26_806
	},
	{
		name: `Cave Goblin`,
		aliases: ['cave goblin'],
		level: 36,
		xp: 40,
		petChance: 35_205
	},
	{
		name: 'Master Farmer',
		aliases: ['master farmer'],
		level: 38,
		xp: 43,
		petChance: 33_422
	},
	{
		name: 'Guard',
		aliases: ['rel', 'rellekka'],
		level: 40,
		xp: 46.8,
		petChance: 31_063
	},
	{
		name: 'Fremennik Citizen',
		aliases: ['fremennik citizen'],
		level: 45,
		xp: 65,
		petChance: 34_440
	}
];

const Thieving = {
	aliases: ['thieving'],
	Thievable: Thievable,
	id: SkillsEnum.Thieving,
	emoji: Emoji.Agility
};

export default Thieving;