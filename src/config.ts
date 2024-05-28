import dotenv from "dotenv";

dotenv.config();

export const config = {
  datasource: {
    archive:
      process.env.ARCHIVE_URL ||
      "https://otto-gateway.ottoblockchain.network/graphql",
    chain:
      process.env.CHAIN_URL ||
      "wss://api.plugdefi.app/otto-testnet-tahi/ws?apikey=e03dd150-7a9c-4f43-9d90-3f9aa4501427",
  },
  startBlock: process.env.START_BLOCK
    ? Number(process.env.START_BLOCK)
    : 920000,
  chainPrefix: Number(process.env.CHAIN_PREFIX) || 42,
};
