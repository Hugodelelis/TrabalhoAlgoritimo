export function deleteItem(itemId) {
    let disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];

    itemId = Number(itemId);

    const indexToRemove = disciplinas.findIndex(disciplina => disciplina['id'] === itemId);

    if (indexToRemove !== -1) {
        disciplinas.splice(indexToRemove, 1);

        localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    }
}
