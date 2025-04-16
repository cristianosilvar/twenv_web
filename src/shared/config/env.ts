import type { LogLevel } from '../lib/logger';

export const LOG_LEVEL: LogLevel = import.meta.env.PROD ? 'warn' : 'log';
