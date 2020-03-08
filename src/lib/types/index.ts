import Monster from 'oldschooljs/dist/structures/Monster';
import { BeginnerCasket } from 'oldschooljs/dist/simulation/clues/Beginner';
import { MediumCasket } from 'oldschooljs/dist/simulation/clues/Medium';
import { EasyCasket } from 'oldschooljs/dist/simulation/clues/Easy';
import { HardCasket } from 'oldschooljs/dist/simulation/clues/Hard';
import { EliteCasket } from 'oldschooljs/dist/simulation/clues/Elite';
import { MasterCasket } from 'oldschooljs/dist/simulation/clues/Master';

export interface Bank {
	[key: number]: number;
}

export interface StringKeyedBank {
	[key: string]: number;
}

export interface SettingsEntry {
	id: string;
	RSN?: string;
	GP?: number;
	autoupdate?: boolean;
	badges?: string[];
	bank?: Bank;
	clueScores?: Bank;
	monsterScores?: Bank;
	collectionLog?: number[];
	collectionLogBank?: Bank;
	pets?: number[];
	lastDailyTimestamp?: number;
	bitfield?: number[];
	totalCommandsUsed?: number;
	minion?: {
		name?: string;
		hasBought: boolean;
	};
}

export interface Pet {
	id: number;
	emoji: string;
	chance: number;
	name: string;
	type: string;
	altNames: string[];
	bossKeys?: string[];
	finish?(): number;
	formatFinish(num: number): string;
}

export interface KillWorkerOptions {
	bossName: string;
	quantity: number;
	limit: number;
}

export interface KillableMonster extends Monster {
	table: Monster;
	timeToFinish: number;
	emoji: string;
	wildy: boolean;
	canBeKilled: boolean;
}

export const enum SkillsEnum {
	Mining = 'mining'
}

export interface CachedItemPrice {
	price: number;
	fetchedAt: number;
}

export interface ItemPriceCache {
	[key: string]: CachedItemPrice;
}

export interface OSRSPoll {
	title: string;
	description: string;
	questions: PollQuestion[];
}

export interface PollQuestion {
	question: string;
	votes: PollVotes;
}

export interface PollVotes {
	Yes: string;
	No: string;
	'Skip question': string;
}

export interface PetRecords {
	highest: Bank;
	lowest: Bank;
}

export interface JMod {
	redditUsername: string;
	formattedName: string;
}

export type AnyObject = Record<PropertyKey, unknown> | {};

export interface PrivateConfig {
	token: string;
	postgresConfig: {
		database: string;
		user: string;
		password: string;
		port: number;
	};

	twitchClientID: string;
	redditApp: {
		userAgent: string;
		clientId: string;
		clientSecret: string;
		username: string;
		password: string;
	};
	twitterApp: {
		consumer_key: string;
		consumer_secret: string;
		access_token_key: string;
		access_token_secret: string;
	};
	mongoDB: {
		dbUrl: string;
		dbName: string;
	};
	patreon: {
		campaignID: number;
		token: string;
	};
}

export interface ClueTier {
	name: string;
	table: BeginnerCasket | EasyCasket | MediumCasket | HardCasket | EliteCasket | MasterCasket;
	id: number;
	scrollID: number;
	timeToFinish: number;
}

export type ItemTuple = [number, number, number];

export interface Patron {
	patreonID: string;
	discordID?: string;
	entitledTiers: string[];
	lastChargeDate: string;
	lastChargeStatus: string;
	lifeTimeSupportCents: number;
	patronStatus: string;
	pledgeRelationshipStart: string;
}

export type MonsterCategory =
	| 'molanisk'
	| 'aberrant spectre'
	| 'nechryael'
	| 'zombie'
	| 'skeleton'
	| 'ghost'
	| 'hellhound'
	| 'wolf'
	| 'dogs'
	| 'dog'
	| 'ogre'
	| 'black dragon'
	| 'boss'
	| 'black demon'
	| 'blue dragon'
	| 'red dragon'
	| 'green dragon'
	| 'bronze dragon'
	| 'iron dragon'
	| 'steel dragon'
	| 'ghoul'
	| 'dwarf'
	| 'bandit'
	| 'cave crawler'
	| 'kurask'
	| 'gargoyle'
	| 'banshee'
	| 'abyssal demon'
	| 'basilisk'
	| 'cockatrice'
	| 'rockslug'
	| 'dust devil'
	| 'turoth'
	| 'pyrefiend'
	| 'jelly'
	| 'infernal mage'
	| 'crawling hand'
	| 'lizards'
	| 'harpie bug swarm'
	| 'skeletal wyvern'
	| 'killerwatt'
	| 'wall beasts'
	| 'cave slime'
	| 'cave bug'
	| 'bloodveld'
	| 'cave kraken'
	| 'smoke devil'
	| 'bat'
	| 'chaos druid'
	| 'dark warrior'
	| 'mutated zygomite'
	| 'zombies'
	| 'fever spider'
	| 'troll'
	| 'wolves'
	| 'goblin'
	| 'bird'
	| 'suqah'
	| 'scabarites'
	| 'ice warrior'
	| 'kalphite'
	| 'dagannoth'
	| 'monkey'
	| 'jungle horror'
	| 'cave horror'
	| 'sea snake'
	| 'vampyre'
	| 'birds'
	| 'shade'
	| 'shades'
	| 'elemental'
	| 'skeletons'
	| 'rat'
	| 'spider'
	| 'lesser demon'
	| 'greater demon'
	| 'fire giant'
	| 'ice giant'
	| 'moss giant'
	| 'hill giant'
	| 'tzhaar'
	| 'spiritual creatures'
	| 'hobgoblin'
	| 'catablepon'
	| 'scorpion'
	| 'minotaur'
	| 'flesh crawler'
	| 'ankou'
	| 'mogre'
	| 'werewolf'
	| 'cow'
	| 'bear'
	| 'earth warrior'
	| 'otherworldly being'
	| 'magic axe'
	| 'shadow warrior'
	| 'waterfiend'
	| 'mithril dragon'
	| 'icefiend'
	| 'aviansie'
	| 'elves'
	| 'dark beast'
	| 'crocodile'
	| 'brine rat'
	| 'sand crab'
	| 'terror dog'
	| 'lava dragon'
	| 'rogue'
	| 'mammoth'
	| 'chaos druids'
	| 'lizardmen'
	| 'fossil island wyvern'
	| 'revenant'
	| 'adamant dragon'
	| 'rune dragon'
	| 'hydras'
	| 'wyrms'
	| 'drake';
