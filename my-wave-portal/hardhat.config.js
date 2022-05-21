require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        rinkeby: {
            url: "https://eth-rinkeby.alchemyapi.io/v2/1kq4zFynJ9952xTCkgVaTOxGuwTLP51o",
            accounts: ["61e8b7ca9336dbe704f342c4f237f5a3ccb4ab1a1c37e4d416f51148d6415f52"],
        },
    },
};
