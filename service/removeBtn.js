export function removeBtn() {
    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    const btn = document.querySelector('#deleteAll')

    if (disciplinas.length === 0) {
        return btn.disabled = true
    }

    return btn.disabled = false
}