import dotenv from "dotenv";

dotenv.config();

export const config = {
  datasource: {
    archive:
      process.env.ARCHIVE_URL ||
      "http://squid-gateway-service.vortex.svc.cluster.local:8000/graphql",
    chain:
      process.env.CHAIN_URL ||
      "wss://porcini.au.rootnet.app/archive/ws",
  },
  startBlock: process.env.START_BLOCK
    ? Number(process.env.START_BLOCK)
    : 0,
  chainPrefix: Number(process.env.CHAIN_PREFIX) || 42,
};
