// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract IncrementContract {
  uint count = 0;

  function incrementCount() external {
    count++;
  }

  function readCount() external view returns (uint) {
    return count;
  }
}
