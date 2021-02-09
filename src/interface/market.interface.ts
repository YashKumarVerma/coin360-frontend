import { Chip } from "./chip.interface";

/**
 * Market Row Representation
 */
export interface Market {
  asks: { [key: string]: Chip };
  base: string;
  bids: { [key: string]: Chip };
  fixedOrder: number;
  liquidity: number;
  marketCap: number;
  marketCapQuote: number;
  pair: string;
  quote: string;
  volume: number;
}
