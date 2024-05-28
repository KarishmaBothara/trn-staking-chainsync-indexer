import * as ss58 from "@subsquid/ss58";
import { toHex } from "@subsquid/substrate-processor";
import { getAddress } from "ethers";

export const getUserAddress = (chainPrefix: number, user: Uint8Array) => {
  if (chainPrefix === 42) {
    return ss58.codec(chainPrefix).encode(user);
  } else if (chainPrefix === 193) {
    return getAddress(toHex(user));
  }
};
