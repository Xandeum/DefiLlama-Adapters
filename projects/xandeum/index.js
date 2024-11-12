const { getSolBalanceFromStakePool } = require('../helper/solana')
async function tvl(api) {
  await getSolBalanceFromStakePool('xanDnetFGrZkp49s8brXbg6T215JeDTeSfDF19wBiNQ', api)
}
module.exports ={
  timetravel: false,
  doublecounted: true,
  methodology: "TVL is calculated by calling the on-chain state of the Xandeum pool",
  solana: { tvl },
};