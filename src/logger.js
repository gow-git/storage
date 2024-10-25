"use strict";
const pino = require("pino");
const { format } = require("date-fns");

const transport = pino.transport({
  targets: [
    {
      target: "pino-pretty",
      options: { colorize: true, translateTime: "SYS:standard" },
      level: "info",
    },
    {
      target: "pino/file",
      options: {
        destination: "./logs/error.log",
        mkdir: true,
      },
      level: "error",
    },
  ],
});

const logger = pino(
  {
    level: process.env.PINO_LOG_LEVEL || "info",
    sync: false,
    timestamp: () => `,"time":"${format(new Date(), "yyyy-MM-dd HH:mm:ss")}"`,
  },
  transport,
);

module.exports = logger;
