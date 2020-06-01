let singButton = document.querySelector("button");

singButton.addEventListener("click", function() {
    let friends = [" Jennifer", " Eryka", " Charmaine", " Dommy", " Lurong"];


    let a = " lines of code in the file ";
    let b = " lines of code";
    let c = " strikes one out, clears it all out, ";
    let d = " line of code ";
    let e = " no more";






    for (let f = 0; f < friends.length; f++) {
        //console.log(friends[f])

        for (let n = 99; n > 0; n--) {
            if (n == 1) {
                console.log(n + d + "in the file " + n + d + friends[f] + c + e + a);
            } else {
                console.log(n + a + n + b + friends[f] + c + a);
            }
        }
    }
});