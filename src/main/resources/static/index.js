
let eksisterendeListe = "";    //initialized utenfor funksjonen for at den holder seg lik mellom flere kjøp
let filmArray = []
function kjop() {

    document.getElementById("antallError").innerHTML = "";       //blir kvitt av feilmeldinger
    document.getElementById("fornavnError").innerHTML = "";
    document.getElementById("etternavnError").innerHTML = "";
    document.getElementById("telefonnrError").innerHTML = "";
    document.getElementById("epostError").innerHTML = "";

    let film = document.getElementById("filmer").value;
    let antall = document.getElementById("antall").value;     //trenger ikke gjøre om til tall siden vi ikke skal regne med verdien.
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    eksisterendeListe = document.getElementById("billetter").innerHTML = "<tr><td><b/>" + "Film" + "</td><td><b/>" + "Antall" + "</td><td><b/>" + "Fornavn" + "</td><td><b/>" + "Etternavn" + "</td><td><b/>" + "Telefonnr" + "</td><td><b/>" + "Epost" + "</td></tr>";

    console.log(film);
    console.log(antall);
    console.log(fornavn);
    console.log(etternavn);
    console.log(telefonnr);
    console.log(epost);

    let error = false;


    if (antall === "") {
        error = true;
        document.getElementById("antallError").innerHTML = "Må skrive noe inn i antall";
    }
    if (fornavn === "") {
        error = true;
        document.getElementById("fornavnError").innerHTML = "Må skrive noe inn i fornavn";
    }
    if (etternavn === "") {
        error = true;
        document.getElementById("etternavnError").innerHTML = "Må skrive noe inn i etternavn";
    }
    if (telefonnr === "") {
        error = true;
        document.getElementById("telefonnrError").innerHTML = "Må skrive noe inn i telefonnr";
    }
    if (epost === "") {
        error = true;
        document.getElementById("epostError").innerHTML = "Må skrive noe inn i epost";
    }

    if (error === false) {
        let filmBillett = {film: film, antall:antall, fornavn:fornavn, etternavn:etternavn, telefonnr:telefonnr, epost:epost}
        filmArray.push(filmBillett)
        for(let i of filmArray) {
            let billettListe =  " <tr><td> " + i.film + " </td><td> " + i.antall + " </td><td> " + i.fornavn + " </td><td> " + i.etternavn + " </td><td> " + i.telefonnr + " </td><td> " + i.epost + " </td></tr> ";
            eksisterendeListe += billettListe
            document.getElementById("billetter").innerHTML = eksisterendeListe;
        }

        //eksisterendeListe = eksisterendeListe + billettListe;


    }
}


function slett() {
    filmArray = []
    eksisterendeListe = "";
    document.getElementById("billetter").innerHTML = eksisterendeListe;
}




