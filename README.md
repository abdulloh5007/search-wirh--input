# This site can search your text

> Type **TEXT** on first **input** and
>
> > Search **TEXT** on second **input**

# This site no includes in **Function REPLACE**

```javascript
const text = document.getElementById("text");
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

button.addEventListener("click", function () {
  const searchTerm = input.value;
  const textContent = text.textContent.toLowerCase();
  const indices = [];
  let index = textContent.indexOf(searchTerm);
  while (index >= 0) {
    indices.push(index);
    index = textContent.indexOf(searchTerm, index + searchTerm.length);
  }

  if (indices.length > 0) {
    const highlightedText = `<span style="background-color: yellow">${searchTerm}</span>`;
    let newTextContent = "";
    let lastIndex = 0;

    for (let i = 0; i < indices.length; i++) {
      newTextContent +=
        textContent.slice(lastIndex, indices[i]) + highlightedText;
      lastIndex = indices[i] + searchTerm.length;
    }

    newTextContent += textContent.slice(lastIndex);
    text.innerHTML = newTextContent;
  }
});
```
