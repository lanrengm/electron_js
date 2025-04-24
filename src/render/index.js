document.addEventListener('DOMContentLoaded', () => {
    const reloadBtn = document.querySelector("#reload-btn");
    reloadBtn.addEventListener('click', () => {
        location.reload();
    });

    const elInput = document.querySelector("#input-cmd");
    const elBtn = document.querySelector('#btn-cmd');
    const elLog = document.querySelector('#log-cmd');
    elBtn.addEventListener('click', () => {
        const strCmd = elInput.value;
        console.log('hhh');
        elLog.textContent = strCmd;

        window.electronAPI.send('msg-cmd', strCmd);
        window.electronAPI.on('msg-cmd', (event, data) => {
            elLog.textContent = data;
        });
    });
});