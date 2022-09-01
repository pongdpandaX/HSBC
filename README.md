# HSBC
HSBC Exercise for Cross Chain Hash Timelocked Contract


## Technology Used
DAPP : Purely HTML and Javascript

Smart Contract : Solidity

Network : BSC Testnet and Ropsten


## Pre-Requisites
- Metamask
- Visual Studio Code or any Terminal Enabled Software
- Account with balance in BSC Testnet and Ropsten

## Overview
There are two key folders. `contracts` holds the solidty code. `frontend` contains the ui for the smart contracts.


### BSC Testnet Information
Deployed on BSC Testnet Network


[**HTLC**](https://testnet.bscscan.com/address/0x5348e9c11AedA7d343fD0788cFD39542Ce07D033)


`0x5348e9c11AedA7d343fD0788cFD39542Ce07D033`


[**Token**](https://testnet.bscscan.com/address/0x0Cd5709C00E20d0E3d56d3B668c968Cb850B35AE)


`0x0Cd5709C00E20d0E3d56d3B668c968Cb850B35AE`

### Ropsten Information
Deployed on Ropsten Network


[**HTLC**](https://ropsten.etherscan.io/address/0x05662887712f8F682a61C4B85bF697D28256acCC)


`0x05662887712f8F682a61C4B85bF697D28256acCC`


[**Token**](https://ropsten.etherscan.io/address/0x0Cd5709C00E20d0E3d56d3B668c968Cb850B35AE)


`0x0Cd5709C00E20d0E3d56d3B668c968Cb850B35AE`

# Instruction
From the **frontend** folder, run

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:5500](http://localhost:5500) to view it in the browser.

OR you can just copy the whole [frontend](https://github.com/pongdpandaX/HSBC/tree/main/frontend) folder and open [HSBC.html](http://localhost:5500/HSBC.html)

# User Guide

## Step 1 - Verification
- Connect to BSC Testnet and Veriy your account

## Step 2 - Get Token to Lock
- Click the Mint Token to get the BSC Token defined above

## Step 3 - Approve Hash Lock Contract
- Click the Approve Button to allow our HTLC contract access our BSC Token

## Step 4 - Create a new contract and copy the Contract Code

- Create the contract for swap by providing the receiver address, amount, timelock duration, and passcode (secret key), then click the Create Contract Button

- Copy the Contract Code Generated - you will send this to the receiver for verification

The secret key is to be given once you confirmed the Contract Code from the receiver as well.
## Step 5 - Verify Contract
- You can also verify the Contract by providing the Contract Code.
## Step 6 - Withdraw Token
- Provide the contract code and the passcode(secret key)
- Only the contract receiver can withdraw the token
## Step 7 - Refund (Optional)
- Provide the contract code to refund afther the timelock expires

# Creating your own HTLC and Token

Create the Token to be used for BSC Testnet and Ropsten using the [HSBCToken.sol](https://github.com/pongdpandaX/HSBC/blob/main/contracts/HSBCToken.sol)

Create the Hash Timelock Contrac to be used for BSC Testnet and Ropsten using the [HSBCHashedTimeLockContract.sol](https://github.com/pongdpandaX/HSBC/blob/main/contracts/HSBCHashedTimeLockContract.sol)

Update the HSBC.html file line 16-19 to reflect your own BSC Testnet and Ropsten contract
