import type { LogLevel } from '../lib/logger/types';

export type Environment = 'development' | 'production';

export const LOG_LEVEL: LogLevel = import.meta.env.PROD ? 'warn' : 'log';
