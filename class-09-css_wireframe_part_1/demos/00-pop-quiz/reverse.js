function reverse(string) {
  var result = '';

  for(var i = string.length - 1; i >= 0; i--){
    // result = result + string[i];
    result += string[i];
  }

  return result;
}
