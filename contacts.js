const contactsOperations = require("./db");
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      // console.log(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);

      if (!contact) {
        throw new Error(`Contact with id ${id} not found`);
      }
      break;

    case "add":
      const newContact = await contactsOperations.addContact(newData);
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

// invokeAction(argv);
// invokeAction({ action: "list" });
// const id = "2";
// invokeAction({ action: "get", id });
const newData = {
  name: "Alla Ray",
  email: "mulla.ante@vestibul.co.uk",
  phone: "(992) 817-3792",
};
// invokeAction({ action: "add", newData });

const id = "033d9f7e-a9a4-4a3a-a2c4-61a7118be0b5";
invokeAction({ action: "remove", id });
