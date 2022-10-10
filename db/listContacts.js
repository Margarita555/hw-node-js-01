const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  // console.log(contacts);
  return contacts;
}

module.exports = listContacts;
