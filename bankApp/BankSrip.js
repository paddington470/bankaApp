let accounts ={};
let money = 1;


function createAccount(){// make new page to create account name and id
    let id = Math.floor(Math.random()*10000);
    accounts[id] = { balance: money };//math not mathing to balance
    document.getElementById('message').innerText = "Created account with ID:" + id;
    
}


function viewAccount() {
let id = parseInt(document.getElementById('accountId').value);
if(accounts[id]){
    window.location.href = "balance.html?id=" + id;//id is used in top html
} 
else{
    document.getElementById('message').innerText = "No account found with ID: " + id
 }
}

function deleteAccount(){
    let id = parseInt(document.getElementById('accountId').value);
    if (accounts[id]) {
        delete accounts[id];
        document.getElementById('message').innerText = "Deleted account with ID: " + id;
    }
    else{
        document.getElementById('message').innerText = "no account found with ID: "+ id;


    }
}



window.onload = function() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = parseInt(urlParams.get('id'));
    if (accounts[id] == id){ //try puting beter proof of id 
        document.getElementById('balance').innerText = "balance " + accounts[id].balance;
        
    }else{//chang to a page that said error 
        document.getElementById('balance').innerText = "balance: " + money;
    }

    document.getElementById('buttonStyles').style.backgroundColor = 'red';
    document.getElementById('buttonStyles').style.color = 'white';
    
};