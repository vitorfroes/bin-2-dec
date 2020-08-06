const isBinary = (bin) => {
  let ret = true;

  if (bin && bin.length > 0) {
    for (let index = 0; index < bin.length; index++) {
      if (bin.charAt(index) !== "1" && bin.charAt(index) !== "0") {
        ret = false;
        break;
      }
    }
  }

  return ret;
};

export default isBinary;
