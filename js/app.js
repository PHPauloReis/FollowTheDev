const deleteDev = (event) => {
    const confirmed = confirm('Você tem certeza que deseja excluir este Dev?')

    if(confirmed) {
        alert('Registro excluído com sucesso!')
    }

    event.preventDefault();
}