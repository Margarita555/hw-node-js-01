const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const data = await fs.readFile(`${__dirname}/contacts.json`);
  const contacts = JSON.parse;
  return contacts;
}

module.exports = listContacts;
