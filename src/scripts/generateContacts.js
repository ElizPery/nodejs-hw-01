import { updateContacts } from "./updateContacts.js";
import { getAllContacts } from "./getAllContacts.js";
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const contactsList = await getAllContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    contactsList.push(...newContacts);
    await updateContacts(contactsList);
};

generateContacts(5);
