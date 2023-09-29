const fs = require("fs");

const logMessage = "NAMA  : LATIF NURHIDAYAT MAJOR  : FSWD\n";

fs.appendFile("log.txt", logMessage, (err) => {
  if (err) {
    console.error("Gagal menulis ke log.txt", err);
  } else {
    console.log("Pesan log berhasil ditulis ke log.txt");
  }
});
