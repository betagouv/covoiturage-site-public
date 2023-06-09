import { DirectusOptions } from '@directus/sdk';
import { ConfigObject } from '.';

type DirectusConfig = ConfigObject & {
  options: DirectusOptions;
};

export const directus: DirectusConfig = {
  host: process.env.NEXT_DIRECTUS_HOST,
  options: {},
};
