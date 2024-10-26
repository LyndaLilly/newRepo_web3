// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;


import "hardhat/console.sol";

contract Greeter{
    string greeting;
    
    constructor(string memory _greeting){
        console.log("Deplotung a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory){
        return greeting;
    }

    function setGreeter(string memory _greeting) public{
        console.log("Changing greeting '%s' to '%s'", greeting, _greeting);
    }
}