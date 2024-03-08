console.log(emojiList);
let emoji_container = document.querySelector('#emoji-container');
let search_field = document.querySelector('#search-field');

function displayEmojee(query = '') {
    let filteredData = emojiList.filter(e => {
        if (e.description && e.description.toLowerCase().includes(query.toLowerCase())) {
            return true;
        }
        if (e.aliases && e.aliases.find(eleme => eleme.toLowerCase().includes(query.toLowerCase()))) {
            return true;
        }
        if (e.tag && e.tag.find(eleme => eleme.toLowerCase().includes(query.toLowerCase()))) {
            return true;
        }
    });

    emoji_container.innerHTML = '';
    filteredData.forEach(e => {
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_description = document.createElement("td");
        let copyButton = document.createElement("button");

        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_description.innerText = e.description;

        copyButton.innerText = "Copy";
        copyButton.addEventListener('click', () => copyToClipboard(e.emoji));

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_description);
        new_row.appendChild(copyButton);

        emoji_container.appendChild(new_row);
    });
}

function searchData(e) {
    let value = e.target.value;
    console.log(value);
    displayEmojee(value);
}

function copyToClipboard(emoji) {
    const textarea = document.createElement('textarea');
    textarea.value = emoji;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(`Copied: ${emoji}`);
}

window.addEventListener("load", displayEmojee);
search_field.addEventListener('input', searchData);




