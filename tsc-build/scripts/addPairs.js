"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { createWalletClient, http, parseUnits } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const { StoryIliad } = require("../const/customChains");
const chains_1 = require("viem/chains");
//const { MatchingEngineABI } = require('./abis/matchingEngineAbi');
const { ChainIds } = require("../const");
const { MatchingEngineABI } = require("../abis/matchingEngineAbi");
const defaultTokenList = require("../../build/standard-default.tokenlist.json");
require("dotenv").config();
function getPairs(networkName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const chainId = ChainIds[networkName];
            const pairs = defaultTokenList.pairs.filter((pair) => pair.base.chainId == chainId);
            return pairs;
        }
        catch (error) {
            console.error("Error getting pairs:", error);
        }
    });
}
function addPair(pair, matchingEngine, walletClient, abi) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Add pair
            const result = yield walletClient.writeContract({
                address: matchingEngine,
                abi: abi,
                functionName: "addPair",
                args: [
                    pair.base.address,
                    pair.quote.address,
                    parseUnits(pair.listing_price.toString(), 8),
                    0
                ],
            });
            console.log("Transaction hash for adding pair:", result);
        }
        catch (error) {
            console.error("Error calling contract:", error);
        }
    });
}
function setSpread(pair, matchingEngine, walletClient, abi) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (pair.buy_tick === undefined && pair.sell_tick === undefined) {
            console.log("Spread already set");
            return;
        }
        try {
            // Set up ticks for listed pair
            const result2 = yield walletClient.writeContract({
                address: matchingEngine,
                abi: abi,
                functionName: "setSpread",
                args: [
                    pair.base.address,
                    pair.quote.address,
                    (_a = pair.buy_tick) !== null && _a !== void 0 ? _a : 200,
                    (_b = pair.sell_tick) !== null && _b !== void 0 ? _b : 200,
                ],
            });
            console.log("Transaction hash for setting ticks:", result2);
        }
        catch (error) {
            console.error("Error setting up ticks:", error);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const account = privateKeyToAccount(process.env.ADMIN_PRIVATE_KEY);
        const walletClient = createWalletClient({
            account,
            chain: chains_1.morphHolesky,
            transport: http(process.env.MORPH_HOLESKY_RPC),
        });
        const abi = MatchingEngineABI;
        const pairs = yield getPairs("Morph Holesky");
        console.log("Pairs to add:", pairs.length);
        // make contract call on each pair in the list
        const matchingEngine = defaultTokenList.matchingEngine["Morph Holesky"].address;
        for (const pair of pairs) {
            yield addPair(pair, matchingEngine, walletClient, abi);
            yield setSpread(pair, matchingEngine, walletClient, abi);
        }
    });
}
main();
