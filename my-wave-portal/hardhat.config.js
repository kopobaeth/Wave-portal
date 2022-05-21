require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        rinkeby: {
            url: "your_alchemyapi",
            accounts: ["your_private_key"],
        },
    },
};
