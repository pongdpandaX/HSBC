pragma solidity ^0.8.16;  
//SPDX-License-Identifier: UNLICENSED

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract HSBCHashedTimeLockContract {
    uint public startTime;
    uint public lockTime = 300 seconds;
    string public secret; //HSBCEx3rc1s3
    bytes32 public hashKey = 0xc12fba2324bc924c4887c547cc2d200553bcbff8e653a08db750b9ae0ffe3643;
    address public recipientAddress;
    address public ownerAddress; 
    uint public amount; 
    IERC20 public token;

    /**
     * This constructor creates the Hashed Time Lock Contract
     *
     * Info:
     *
     * - `_recipient` - recipient address (either Alice or Bob)
     * - `_token` - token address
     * - `_amount` - token amount, for this exercise we set it to 1
     */
    constructor(address _recipient, address _token, uint _amount) { 
        recipientAddress = _recipient;
        ownerAddress = msg.sender; 
        amount = _amount;
        token = IERC20(_token);
    } 


    //This external function is initiates the deposit of Token
    function DepositFund() external {
        startTime = block.timestamp;
        token.transferFrom(msg.sender, address(this), amount);
    }


    //This external function is initiates the withdrawal of Token based on the secret key's hash to the recipient address
    function WithdrawFund(string memory _secret) external { 
        require(keccak256(abi.encodePacked(_secret)) == hashKey, 'Invalid secret key.');
        secret = _secret; 
        token.transfer(recipientAddress, amount); 
    } 


    //This external function enables the token from the contract to be withdrawn once the lock duration ends
    //and the recipient did not withdraw within the defined 300 seconds timelock
    function Refund() external { 
        require(block.timestamp > startTime + lockTime, 'too early');
        token.transfer(ownerAddress, amount); 
    } 
}
