const LimitText = {
  descriptionTxt(txt) {
    let desc = txt.substring(txt,90);
    desc += "...";
    return desc;
  },
};

export default LimitText;