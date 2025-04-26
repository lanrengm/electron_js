function registryReload() {
    const reloadBtn = document.querySelector("#reload-btn");
    reloadBtn.addEventListener('click', () => {
        location.reload();
    });
}

function registrySearch() {
    const input = document.querySelector('#search-input');
    const button = document.querySelector('#search-button');
    const content = document.querySelector('#content');
    button.addEventListener('click', () => {
        console.log(input.value);
        window.electronAPI.send('search-request', input.value);
    });
    window.electronAPI.on('search-response', (event, data) => {
        // console.log(data);
        content.textContent += data;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    registryReload();
    registrySearch();
});