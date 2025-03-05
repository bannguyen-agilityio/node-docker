import winston from 'winston';

interface LoggerMetadata {
  req?: Request;
  meta?: unknown;
}

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [new winston.transports.Console()],
});

const log = (
  level: 'info' | 'error' | 'warn',
  msg: string,
  { req, meta }: LoggerMetadata = {},
) => {
  let userId: string | undefined;

  if (req) {
    // TODO: get userId from token
    // userId = request.auth.userId;
  }

  const logData = {
    method: req?.method,
    url: req?.url,
    ...(userId && { userId }),
    meta,
    ...(meta instanceof Error && {
      error: {
        message: meta.message,
        stack: meta.stack,
      },
    }),
  };

  logger[level](msg, logData);
};

export const logError = (msg: string, metadata?: LoggerMetadata) => {
  log('error', msg, metadata);
};

export const logWarn = (msg: string, metadata?: LoggerMetadata) => {
  log('warn', msg, metadata);
};

export const logInfo = (msg: string, metadata?: LoggerMetadata) => {
  log('info', msg, metadata);
};
