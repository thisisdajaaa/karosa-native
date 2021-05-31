export const formatPhoneNumber = (phoneNumber: string) => {
  const sectionOne =
    phoneNumber.substring(0, 4).substring(0, 1) === "0"
      ? phoneNumber.substring(0, 4).replace("0", "(+63) ")
      : "";
  const sectionTwo = phoneNumber.substring(4, 7);
  const sectionThree = phoneNumber.substring(7, 11);

  return [sectionOne, sectionTwo, sectionThree].join(" ");
};

export const generateRandomUsername = (length: number) => {
  let result = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result.toLowerCase();
};
