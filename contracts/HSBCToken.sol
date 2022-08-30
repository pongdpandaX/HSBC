pragma solidity ^0.8.16;  
//SPDX-License-Identifier: UNLICENSED

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

//Sample token to be used for the HSBCHashedTimeLockContract Exercise
contract HSBCToken is ERC20 {
  constructor(string memory name, string memory ticker) ERC20(name, ticker) {
    _mint(msg.sender, 1);
  }
}
