import { updateContacts } from './updateContacts.js';

export const removeAllContacts = async () => {
    return updateContacts([]);
};

removeAllContacts();
