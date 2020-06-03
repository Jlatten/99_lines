let singButton = document.querySelector("button");

singButton.addEventListener("click", function() {
    let friends = [" Jennifer", " Eryka", " Charmaine", " Dommy", " Lurong"];


    let a = " lines of code in the file";
    let b = " lines of code";
    let c = " strikes one out, clears it all out, ";
    let d = " line of code";
    let e = " no more";






    for (let f = 0; f < friends.length; f++) {
        //console.log(friends[f])

        let friendDiv = document.createElement("div");
        friendDiv.classList.add("friend");
        let friendH3 = document.createElement("h3");
        friendH3.textContent = friends[f];
        friendDiv.appendChild(friendH3);
        document.body.appendChild(friendDiv);

        for (let n = 99; n > 0; n--) {
            let friendP = document.createElement("p");
            friendDiv.appendChild(friendP);


            if (n === 1) {
                friendDiv.textContent = n + a + " " + n + b + ": " + friends[f] + " " + c + n + a;
            } else if (n === 2) {
                friendDiv.textContent = n + d + " in the file, " + n + d + ": " + friends[f] + " " + c + e + a + ".";
            }
        }
    }
});