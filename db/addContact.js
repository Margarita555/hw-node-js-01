const { v4 } = require("uuid");
const fs = require("fs/promises");
const listContacts = require("./listContacts");
const filePath = require("./filePath");

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
}

module.exports = addContact;
