const   ul = document.querySelector("ul");
const   input = document.querySelector("input");
const   button = document.querySelector("button");

button.addEventListener("click", () =>
{
    let inputText = input.value;
    input.value = "";
    const   li = document.createElement("li");
    const   span = document.createElement("span");
    const   newButton = document.createElement("button");

    li.appendChild(span);
    li.appendChild(newButton);
    span.textContent = inputText;
    newButton.textContent = "Delete";
    ul.appendChild(li);

    newButton.addEventListener("click", () =>
    {
        li.remove();
    });
    input.focus();
});