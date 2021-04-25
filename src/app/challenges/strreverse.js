import React from "react";

const strreverse = () => {

  
  var str = "hello";
  var arr = [];
  var rstr = "";
  for (var i = 0; i < str.length; i++) {
    arr[str.length - i - 1] = str[i];
  }
  for (var i = 0; i < str.length; i++) {
    rstr = rstr + arr[i];
  }

  return <div>{rstr}</div>;
};

export default strreverse;
