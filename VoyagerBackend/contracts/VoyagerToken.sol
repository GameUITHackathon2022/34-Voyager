// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact minhlam2102002@gmail.com
contract VoyagerToken is ERC20Capped, Ownable {
    constructor(uint256 cap) ERC20("VoyagerToken", "VYT") ERC20Capped(cap) {}

    function awardToken(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
