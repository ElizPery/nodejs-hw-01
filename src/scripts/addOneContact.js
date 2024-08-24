
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from "./updateContacts.js";

import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const contactsList = await getAllContacts();
    const newContact = createFakeContact();
    contactsList.push(newContact);
    await updateContacts(contactsList);
};

addOneContact();
