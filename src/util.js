import { inspect } from "util";

const trimValue = (value) => {
  try {
    let errString = value;
    if (typeof value !== "string") {
      errString = inspect(value);
    }
    if (errString.length <= 256) {
      return value;
    } else {
      return errString.substring(0, 256);
    }
  } catch (err) {
    return "Can't format value in trimValue in XrayUtils";
  }
};
const value = {
  emailId: "a83efa40-ab6c-11ec-8617-791eaf5b7aa0"
};
console.log(trimValue(value));
