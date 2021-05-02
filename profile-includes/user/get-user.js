// Fetch user data

fetch('../profile-includes/user/retrieve-user.php')
.then(response => {
    return response.json();
}).then(data => {
    data.forEach(value => {   

    document.getElementById("user-info").innerHTML =
    `<h3>Account information</h3> 
    <p>Username <span class="user-info">${value.usersName}</span></p>
    <p>Email <span class="user-info">${value.usersEmail}</span></p>`;
 });
}).catch(err => {
    console.log('request error');
});


// Show Delete account form
document.querySelector(".deleteAccBtn").addEventListener('click', DeleteForm => {
    document.querySelector(".delete-acc-container").style.display = "flex";
});

//Exit Delete account form
document.getElementById("cancelBtn").addEventListener('click', ExitForm => {
    document.querySelector(".delete-acc-container").style.display = "none";
});