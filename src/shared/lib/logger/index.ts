import { LOG_LEVEL } from '../../config/env';

import { ConsoleLogger } from './logger';

export const logger = new ConsoleLogger({ level: LOG_LEVEL });
