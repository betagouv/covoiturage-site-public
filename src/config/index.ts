/**
 * 1. Import the configuration file
 * 2. add the configuration to the object in objectToMap()
 */
import { observatoire } from './observatoire';

const _configuration = objectToMap({
  observatoire,
  next: nextEnvironmentVariables(),
});

// ---------------------------------------------------------------------------------------
// Helpers and export
// ---------------------------------------------------------------------------------------

type ConfigValue = string | number | boolean | null | { [key: string]: ConfigValue };
type Value = string | number | boolean | null;

function nextEnvironmentVariables(): ConfigValue {
  return Object.entries(process.env)
    .filter(([key]) => key.startsWith('NEXT_'))
    .filter(([key]) => typeof process.env[key] !== 'undefined')
    .reduce((acc, [key]) => {
      const k = key.replace('NEXT_', '').toLowerCase();
      acc[k] = process.env[key];
      return acc;
    }, {} as Record<string, any>);
}

function objectToMap(obj: ConfigValue): Map<string, ConfigValue> {
  const map = new Map();

  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (typeof value === 'object' && value !== null) {
          map.set(key, objectToMap(value)); // Recursively convert nested objects
        } else {
          map.set(key, value);
        }
      }
    }
  }

  return map;
}

export const Config = {
  get<T extends Value>(key: string, defaultValue?: T): T {
    let _value: unknown = _configuration;
    for (const part of key.split('.')) {
      _value = _value instanceof Map && _value.has(part) ? _value.get(part) : undefined;
    }

    if (typeof _value === 'undefined') {
      if (typeof defaultValue === 'undefined') {
        throw new Error(`Configuration key "${key}" not found`);
      }
      return defaultValue;
    }

    return _value as T;
  },
};
