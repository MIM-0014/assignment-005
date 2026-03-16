function renderIssues(issues){

const container = document.getElementById("issuesContainer");

container.innerHTML = "";

issues.forEach(issue=>{

const border =
issue.status === "open"
? "border-green-500"
: "border-purple-500";

const card = document.createElement("div");

card.className =
`bg-white border-t-4 ${border} p-4 rounded shadow cursor-pointer`;

card.innerHTML = `

<h2 class="font-bold mb-1">${issue.title}</h2>

<p class="text-sm text-gray-600">
${issue.description.slice(0,80)}...
</p>

<p class="text-sm mt-2">
Author: ${issue.author}
</p>

<p class="text-sm">
Priority: ${issue.priority}
</p>

<p class="text-sm">
Label: ${issue.label}
</p>

`;

card.onclick = ()=>showModal(issue);

container.appendChild(card);

});

}