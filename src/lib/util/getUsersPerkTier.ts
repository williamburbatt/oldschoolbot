import { KlasaUser } from 'klasa';

import { Roles, PerkTier, BitField } from '../constants';
import getSupportGuild from './getSupportGuild';
import { UserSettings } from '../settings/types/UserSettings';

export default function getUsersPerkTier(user: KlasaUser): PerkTier {
	if (user.client.owners.has(user)) {
		return 10;
	}

	const supportGuild = getSupportGuild(user.client);
	const member = supportGuild.members.find(member => member.user === user);

	if (user.settings.get(UserSettings.BitField).includes(BitField.IsPatronTier3)) {
		return PerkTier.Four;
	}

	if (
		user.settings.get(UserSettings.BitField).includes(BitField.IsPatronTier2) ||
		(member && [Roles.Contributor, Roles.Moderator].some(roleID => member.roles.has(roleID)))
	) {
		return PerkTier.Three;
	}

	if (user.settings.get(UserSettings.BitField).includes(BitField.IsPatronTier1)) {
		return PerkTier.Two;
	}

	if (member && [Roles.Booster].some(roleID => member.roles.has(roleID))) {
		return PerkTier.One;
	}

	return 0;
}
