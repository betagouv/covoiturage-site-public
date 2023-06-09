import { Config } from '@/config';
import { Directus, DirectusOptions } from '@directus/sdk';

const host = Config.get<string>('directus.host');
const options = Config.get<DirectusOptions>('directus.options');

export const directus = new Directus(host, options);
