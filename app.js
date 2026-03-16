let issuesData = [];

function showLoader(state){

const loader =
document.getElementById("loader");

if(state){

loader.classList.remove("hidden");

}else{

loader.classList.add("hidden");

}

}


async function init(){

showLoader(true);

issuesData = await fetchIssues();

renderIssues(issuesData);

showLoader(false);

}

init();


function filterIssues(type){

if(type==="all"){

renderIssues(issuesData);

}

if(type==="open"){

renderIssues(
issuesData.filter(i=>i.status==="open")
);

}

if(type==="closed"){

renderIssues(
issuesData.filter(i=>i.status==="closed")
);

}

}


async function searchIssues(){

const text =
document.getElementById("searchInput").value;

const result = await searchIssueAPI(text);

renderIssues(result);

}