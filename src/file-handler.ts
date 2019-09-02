import {
    exists,
    promises,
} from 'fs';

export function init() {
    exists('~/.RJSwiSticky', exists => {
        if (exists) {

        } else {
            makeRoot()
                .then(() => {

                })
        }
    })
}

async function makeRoot() {
    await promises.mkdir('~/.RJSwiSticky');
    const configCreate = promises.writeFile('~/.RJSwiSticky/config.json', '');
    const notesCreate = promises.mkdir('~/.RJSwiSticky/notes')
        .then(() => promises.mkdir('~/.RJSwiSticky/New Note'))
        .then(() => {
            const configCreate = promises.writeFile('~/.RJSwiSticky/config.json', '');
            const noteCreate = promises.writeFile('~/.RJSwiSticky/Note/note', '');
            return Promise.all([configCreate, noteCreate]);
        });
    await Promise.all([configCreate, notesCreate]);
}