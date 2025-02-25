/** Assinatura de uma função de log */
export interface LogFn {
  (message?: any, ...optionalParams: any[]): void;
}

/** Interface do Logger */
export interface Logger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

/** Níveis de log permitidos */
export type LogLevel = 'log' | 'warn' | 'error';
