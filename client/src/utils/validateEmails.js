export default (emails) => {
    const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }
    return;
}