const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contactsOperations = require("./db");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);

      if (!contact) {
        throw new Error(`Contact with id ${id} not found`);
      }
      break;

    case "add":
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contactsOperations.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
console.log(argv);
invokeAction(argv);

module.exports = invokeAction;
