// console.log(
//   require("crypto")
//     .createHmac("sha256", "Full Stack 10")
//     .update("Stronger Together")
//     .digest("hex")
// );
console.log(
    require("crypto")
      .createHmac("sha256", "Hello World")
      .update("Made with love by Code Team")
      .digest("hex")
  );