import { StakingStakersElectedEvent } from "../types/events";
import { IStakersElected } from "../interfaces/stakers-elected";

export const stakersElectedMapping = (
  e: StakingStakersElectedEvent
): Partial<IStakersElected> => {
  return {};
};
