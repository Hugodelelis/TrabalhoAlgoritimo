import { deleteAll } from "../service/deleteAll.js"
import { addItem } from "../service/addItem.js";
import { showItem } from "../service/showItem.js";
import { removeBtn } from "../service/removeBtn.js";
import { deleteItem } from "../service/deleteItem.js";

document.querySelector('#deleteAll').addEventListener('click', () => {
    Swal.fire({
        title: "Tem certeza?",
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, delete tudo!",
        cancelButtonText: "Cancelar",
        }).then((result) => {
        if (result.isConfirmed) {
            deleteAll()
            removeBtn()
        }
    })
})

document.querySelector('#addItem').addEventListener('click', () => { 
    Swal.fire({
        title: "Sucesso!",
        text: "A disciplina foi adicionada!",
        icon: "success"
    })

    addItem()
    showItem()
    removeBtn()
})

removeBtn()
showItem()


document.querySelector('.discplinas').addEventListener('click', (event) => {
    console.log('teste')
    console.log(event)
    if (event.target && event.target.classList.contains('deleteItem')) {

        const itemId = event.target.getAttribute('data-id');

        Swal.fire({
            title: "Tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, delete",
            cancelButtonText: "Cancelar",
            }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(itemId);
                showItem();
                removeBtn()
            }
        })
    }
});






