export function showItem() {
    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    const container = document.querySelector('.discplinas')
    container.innerHTML = ''

    disciplinas.map(disciplina => {
        container.innerHTML += `
        <div class="disciplina-container mt-5">
            <div class="disciplina-header">
                    <h3>${disciplina['nome']}</h3>
                    <button class="deleteItem" data-id="${disciplina['id']}">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
            </div>

            <div class="disciplina-content">
                <p>
                    ${disciplina['descricao']}
                </p>
            </div>

            <div class="discplina-footer">
                    Carga horária: <span>${disciplina['cargaHoraria']}h</span>
            </div>
        </div>
        `
    })


}


