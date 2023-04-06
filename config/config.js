const NodeCache = require("node-cache");

const config = {
  prefix: "/",
  openaikey: "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",
  cache: new NodeCache({
    checkperiod: 10000,
    deleteOnExpire: true,
  }),
  ratelimit: new Map(),
  commands: new Map(),
  aliases: new Map(),
};

module.exports = config;
