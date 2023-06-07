const btn = document.querySelector(".btn");
const p = document.querySelector(".emoji-desc");
const emoji = [];
const key = "89f14a4523bee5a912dc86e15910a74a4d7cc026"
async function getEmoji(){
    let response = await fetch(`https://emoji-api.com/emojis?access_key=${key}`)
    data = await response.json();
    for(let i=0; i<1000; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiDesc: data[i].unicodeName
        });
    }
    console.log(emoji);
}
getEmoji();
btn.addEventListener("click", () => {
    const randonNum = Math.floor(Math.random()*emoji.length);
    btn.innerText = emoji[randonNum].emojiName;
    p.innerText = emoji[randonNum].emojiDesc;
})
Collapse








