import { bnbContractDetails, contractDetails } from "../constants";

const checkNetworkMatch = async (payload) => {
  var t = await window.web3.eth.net.getId();
  var e = await window.web3.eth.getChainId();
  if (420 === t && 420 === e) {
    window.contract = new window.web3.eth.Contract(
      bnbContractDetails.abi,
      bnbContractDetails.address
    );
    window.isBnb = !0;
    payload.onSuccess();
    return;
  } else {
    if (421613 !== t || 421613 !== e) {
      payload?.onFailure && payload.onFailure("UNSUPPORTED_NETWORK");
      return;
    }
    window.contract = new window.web3.eth.Contract(
      contractDetails.abi,
      contractDetails.address
    );
  }
  payload.onSuccess();
};

export default checkNetworkMatch;
