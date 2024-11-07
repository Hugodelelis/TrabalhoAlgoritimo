export function deleteAll() {
    const container = document.querySelector('.discplinas')
    container.innerHTML = ''

    return localStorage.setItem('disciplinas', JSON.stringify([]));
}
