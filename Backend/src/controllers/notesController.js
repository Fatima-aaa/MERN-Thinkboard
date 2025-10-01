export function getAllNotes(req, res) {
    res.status(200).send('Here are all the notes!');
}

export function createNote(req, res) {
    res.status(201).send('Note created!');
}

export function updateNote(req, res) {
    res.status(200).send(`Note with ID ${req.params.id} updated!`);
}

export function deleteNote(req, res) {
    res.status(200).send(`Note with ID ${req.params.id} deleted!`);
}

