const getFormValue = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surName = document.getElementById("surname").value;
    const email = document.getElementById('email').value;
    const adress = document.getElementById('adress').value;
    const number = document.getElementById('number').value;
    const postCode = document.getElementById('postcode').value;
    console.log(name + " " + surName);
    console.log(email);
    console.log(adress);
    console.log(number);
    console.log(postCode);
}