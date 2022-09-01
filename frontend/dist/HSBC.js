function SetContractInfo(){
    $("#contractBSCT").text(BSCTContract);
    $("#contractHashLockBSCT").text(BSCTHashLockContract);
    $("#contractRopstenT").text(RopstenContract);
    $("#contractHashRopstenT").text(RopstenHashLockContract);
            
}

function ClearVerify(){
    $("#verifyaddressSenderBSCT").val("");
    $("#verifyaddressReceiverBSCT").val("");
    $("#verifyAmountBSCT").val("");
    $("#verifytimelockBSCT").val("");
    $("#verifyWithdrawnBSCT").val("");
    $("#verifyRefundedBSCT").val("");
}

async function WithdrawBSC(){
    try{
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(BSCTHashLockContract, abiWithdraw, signer);
        await tokenContract.withdraw($("#withdrawContractBSCT").val(), $("#withdrawpasscodekBSCT").val()).then((tx)=>{
            console.log(tx);
        });
    }
    catch(error){
        console.log(error);
        alert(error.data.message);
    }
}

async function WithdrawRopsten(){
    try{
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(RopstenHashLockContract, abiWithdraw, signer);
        await tokenContract.withdraw($("#withdrawContractRopstenT").val(), $("#withdrawpasscodekRopstenT").val()).then((tx)=>{
            console.log(tx);
        });
    }
    catch(error){
        console.log(error);
        alert(error.message);
    }
}

async function RefundBSC(){
    try{
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(BSCTHashLockContract, abiRefund, signer);
        await tokenContract.refund($("#refundContractBSCT").val()).then((tx)=>{
            console.log(tx);
        });
    }
    catch(error){
        console.log(error);
        alert(error.data.message);
    }
}

async function RefundRopsten(){
    try{
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(RopstenHashLockContract, abiRefund, signer);
        await tokenContract.refund($("#refundContractRopstenT").val()).then((tx)=>{
            console.log(tx);
        });
    }
    catch(error){
        console.log(error);
        alert(error.message);
    }
}

async function VerifyContractBSC(){
    try{
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(BSCTHashLockContract, abiVerifyContract, signer);
        await tokenContract.getContract($("#verifyContractBSCT").val()).then((tx)=>{
            console.log(tx);
            $("#verifyaddressSenderBSCT").val(tx[0]);
            $("#verifyaddressReceiverBSCT").val(tx[1]);
            $("#verifyAmountBSCT").val(tx[2]);
            $("#verifytimelockBSCT").val(tx[4]);
            $("#verifyWithdrawnBSCT").val(tx[5]);
        });
    }
    catch(error){
        alert(error)
        ClearVerify();
    }
}

async function VerifyContractRopsten(){
    try{
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(RopstenHashLockContract, abiVerifyContract, signer);
        await tokenContract.getContract($("#verifyContractRopstenT").val()).then((tx)=>{
            console.log(tx);
            $("#verifyaddressSenderRopstenT").val(tx[0]);
            $("#verifyaddressReceiverRopstenT").val(tx[1]);
            $("#verifyAmountRopstenT").val(tx[2]);
            $("#verifytimelockRopstenT").val(tx[4]);
            $("#verifyWithdrawnRopstenT").val(tx[5]);
        });
    }
    catch(error){
        alert(error)
        ClearVerify();
    }
}
        
async function CreateLockBSC(){
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signerCreateContract = provider.getSigner();
    var contractMint = new ethers.Contract(BSCTHashLockContract, abiCreateContract, signerCreateContract);
    var blockNumber = await provider.getBlockNumber();
    var timeLockBlock = parseInt(blockNumber) + parseInt($("#timelockBSCT").val());
    const tokenContractHash = new ethers.Contract(BSCTHashLockContract, abiContractHash, signerCreateContract);
    
    var contractId = await contractMint.newContract(
        $("#addressReceiverBSCT").val(),
        $("#hashlockBSCT").val(),
        timeLockBlock,
        $("#amountReceiverBSCT").val()).then((contractId)=>{
            console.log(contractId);
            //$("#contractCodeBSCT").val(contractName);
            tokenContractHash.getContractHash($("#addressReceiverBSCT").val(),
                $("#hashlockBSCT").val(),
                timeLockBlock,
                $("#amountReceiverBSCT").val()).then((tx)=>{
                    $("#contractCodeBSCT").val(tx);
                });
        });            
}

async function CreateLockRopsten(){
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signerCreateContract = provider.getSigner();
    var contractMint = new ethers.Contract(RopstenHashLockContract, abiCreateContract, signerCreateContract);
    var blockNumber = await provider.getBlockNumber();
    var timeLockBlock = parseInt(blockNumber) + parseInt($("#timelockRopstenT").val());
    const tokenContractHash = new ethers.Contract(RopstenHashLockContract, abiContractHash, signerCreateContract);
    
    var contractId = await contractMint.newContract(
        $("#addressReceiverRopstenT").val(),
        $("#hashlockRopstenT").val(),
        timeLockBlock,
        $("#amountReceiverRopstenT").val()).then((contractId)=>{
            console.log(contractId);
            //$("#contractCodeRopstenT").val(contractName);
            tokenContractHash.getContractHash($("#addressReceiverRopstenT").val(),
                $("#hashlockRopstenT").val(),
                timeLockBlock,
                $("#amountReceiverRopstenT").val()).then((tx)=>{
                    $("#contractCodeRopstenT").val(tx);
                });
        });            
}

async function GenerateHashBSC(){
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(BSCTHashLockContract, abiHash, signer);
    await tokenContract.getHash($("#passcodekBSCT").val()).then((tx)=>{
        $("#hashlockBSCT").val(tx);
    });
            
}        

async function GenerateHashRopsten(){
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(RopstenHashLockContract, abiHash, signer);
    await tokenContract.getHash($("#passcodekRopstenT").val()).then((tx)=>{
        $("#hashlockRopstenT").val(tx);
    });
            
}

async function ConnectToRopsten(){
    //change to Ropsten
    changeNetwork(RopstenNetworkId);
}

async function ConnectWallet() {
    bundle.connect();
}

async function ConnectToBSCTestNet(){
    //change to BSC testnet
    changeNetwork(BSCTNetworkId);
}

async function MintBSCToken(){
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signerMint = provider.getSigner();
    var contractMint = new ethers.Contract(BSCTContract, abiMint, signerMint);
    
    await contractMint.GetToken(10);
}

async function MintRopstenToken(){
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signerMint = provider.getSigner();
    var contractMint = new ethers.Contract(RopstenContract, abiMint, signerMint);
    
    await contractMint.GetToken(10);
}
        
async function ApproveBSCToken() {
    var abiApprove = ["function approve(address _spender, uint256 _value) public returns (bool success)"]
    var providerApprove = new ethers.providers.Web3Provider(window.ethereum);
    const signerApprove = providerApprove.getSigner();
    var contractApprove = new ethers.Contract(BSCTContract, abiApprove, signerApprove);
    
    await contractApprove.approve(BSCTHashLockContract, "100000000000000000000000000000000000000000000");
}

async function ApproveRopstenToken() {
    var abiApprove = ["function approve(address _spender, uint256 _value) public returns (bool success)"]
    var providerApprove = new ethers.providers.Web3Provider(window.ethereum);
    const signerApprove = providerApprove.getSigner();
    var contractApprove = new ethers.Contract(RopstenContract, abiApprove, signerApprove);
    
    await contractApprove.approve(RopstenHashLockContract, "100000000000000000000000000000000000000000000");
}
        
async function GetWalletInfoBSC(){
    //get wallet info
    const accountsCon = await ethereum.request({ method: "eth_accounts" });
    $("#walletBSCT").text(accountsCon[0]);

    //get native balance info
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getBalance(accountsCon[0]).then((balance) => {
        const balanceInEth = ethers.utils.formatEther(balance)
        $("#balanceBSCT").text(balanceInEth + " BNB");
    })

    //get Token balance
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(BSCTContract, commonABI, signer);
    const contractBalance =  await tokenContract.balanceOf(accountsCon[0]);
    $("#balanceTokenBSCT").text(contractBalance + " BSCToken");
}
        
async function GetWalletInfoRopsten(){
    //get wallet info
    const accountsCon = await ethereum.request({ method: "eth_accounts" });
    $("#walletRopsten").text(accountsCon[0]);

    //get balance info
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getBalance(accountsCon[0]).then((balance) => {
        const balanceInEth = ethers.utils.formatEther(balance)
        $("#balanceRopsten").text(balanceInEth + " ETH");
    })

    //get Token balance
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(BSCTContract, commonABI, signer);
    const contractBalance =  await tokenContract.balanceOf(accountsCon[0]);
    $("#balanceTokenRopstenT").text(contractBalance + " RopstenToken");
}


const changeNetwork = async (networkId) => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: Web3.utils.toHex(networkId) }],
            }).then((tx) => {
                if (networkId == BSCTNetworkId){
                    GetWalletInfoBSC();
                }
                else if (networkId == RopstenNetworkId){
                    GetWalletInfoRopsten();
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
}

function DisplayTab(evt, network){
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    if (evt != null) {
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        evt.currentTarget.className += " active";
    }
            
    document.getElementById(network).style.display = "block";


    if (network == "BSCT"){
        ConnectToBSCTestNet();
    }
    else{
        ConnectToRopsten();
    }
}