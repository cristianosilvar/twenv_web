export interface LogFn {
  (message?: any, ...optionalParams: any[]): void;
}

export interface Logger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

export type LogLevel = 'log' | 'warn' | 'error';
