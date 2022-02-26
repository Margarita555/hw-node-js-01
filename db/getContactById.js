const listContacts = require("./listContacts");

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  console.log(result);
  if (!result) {
    return null;
  }
  return result;
}

module.exports = getContactById;
