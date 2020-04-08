import { Items } from 'oldschooljs';
import cleanItemName from './cleanItemName';
import { Item } from 'oldschooljs/dist/meta/types';

export default function getOSItem(item: string | number): Item {
	const osItem = Items.get(typeof item === 'string' ? cleanItemName(item) : item) as
		| Item
		| undefined;
	if (!osItem) throw `'${item}' isn't a valid item.`;
	return osItem;
}
