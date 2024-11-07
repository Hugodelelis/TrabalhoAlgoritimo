export function addItem() {
    const name = document.querySelector('#name')
    const des = document.querySelector('#des')
    const ch = document.querySelector('#ch')
    
    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];

    if(disciplinas.length >= 3) {
        Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Limite máximo atingido (3)!",
        });

        return
    }

    if (!name.value || !des.value || !ch.value) {
        Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Preencha todos campos!",
        });

        return;
    }

    disciplinas.push(
        {
            id: Date.now(),
            nome: name.value,
            descricao: des.value,
            cargaHoraria: ch.value,
        }
    )

    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));

    name.value = ''
    des.value = ''
    ch.value = ''
}