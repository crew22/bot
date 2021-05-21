import { CommandConfig, RunFunction } from '../../../lib/interfaces/Command';
import { random } from '../../../lib/util/general';

export const run: RunFunction = async (client, message, args): Promise<void> => {

	switch (random(1, 8)) {
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		case 8:
			break;
		default:
			break;
	}
};

export const config: CommandConfig = {
	name: '8ball',
	aliases: [],
	permission: 'SEND_MESSAGES',
	category: 'other',
	maintenance: false,
};
