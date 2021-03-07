/**
 *
 * @format
 *
 */

export const formatPhoneNumber = (phoneNumber: string) => {
  const sectionOne =
    phoneNumber.substring(0, 4).substring(0, 1) === "0"
      ? phoneNumber.substring(0, 4).replace("0", "(+63) ")
      : "";
  const sectionTwo = phoneNumber.substring(4, 7);
  const sectionThree = phoneNumber.substring(7, 11);

  return [sectionOne, sectionTwo, sectionThree].join(" ");
};
