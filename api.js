const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

async function fetchIssues(){

const res = await fetch(API);
const data = await res.json();

return data.data;

}

async function searchIssueAPI(text){

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`);

const data = await res.json();

return data.data;

}