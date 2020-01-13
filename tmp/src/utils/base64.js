function base64DecodeUnicode(str) {
  // Convert Base64 encoded bytes to percent-encoding, and then get the original string.
  let percentEncodedStr;
  percentEncodedStr = atob(str).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join('');


  return decodeURIComponent(percentEncodedStr);
}

export default base64DecodeUnicode;
