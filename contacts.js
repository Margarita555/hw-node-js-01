function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      break;

    case "get":
      const contact = await contactsOperations.getById(id);
      console.log(contact);
      if (!contact) {
        throw new Error(`Contact with id ${id} not found`);
      }
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
const id = "";
invokeAction({ action: "getById", id });
