
const text = document.getElementById('text');
const input = document.getElementById('search-input');
const button = document.getElementById('search-button');
const res = document.querySelector('.res')

const resulData = []

button.addEventListener('click', function () {
    const searchTerm = input.value.toLowerCase();
    const textContent = text.textContent.toLowerCase();
    const indices = [];
    let index = textContent.indexOf(searchTerm);
    while (index >= 0) {
        indices.push(index);
        index = textContent.indexOf(searchTerm, index + searchTerm.length);
    }

    if (indices.length > 0) {
        const highlightedText = `<span style="background-color: yellow">${searchTerm}</span>`;
        let newTextContent = '';
        let lastIndex = 0;
        resulData.length = 0
        console.log(resulData);


        for (let i = 0; i < indices.length; i++) {
            newTextContent += textContent.slice(lastIndex, indices[i]) + highlightedText;
            lastIndex = indices[i] + searchTerm.length;
            resulData.push(searchTerm)
            res.textContent = `Найдено результатов: ${resulData.length}`
            console.log(resulData);

        }

        newTextContent += textContent.slice(lastIndex);
        text.innerHTML = newTextContent;
    }
});


const inp = document.querySelector('.inp');
const output = document.getElementById('text');

inp.addEventListener('input', function () {
    window.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) {
            output.textContent = this.value;
        }
    })
});

let setIntervalId;

const flashTitle = (ogTitle, newTitle) =>  {
    document.title = document.title === ogTitle ? newTitle : ogTitle
}

document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        document.title = 'Replace';
        return clearInterval(setIntervalId)
    }

    setIntervalId = setInterval(() => {
        flashTitle("Replace", "(7) Notification replace")
    }, 1500);
})