alert("Welcome!");
      function moreInfo() {
          let buttonChange = document.querySelector("button");
          let yourName = prompt("What is your name?");
          let wantToLearn = prompt("Would you like to learn more about coding?").toLocaleLowerCase();
          if (wantToLearn === "yes" || wantToLearn === "y") {
              buttonChange.innerHTML = "<span class='yes'>See you soon, " + yourName + "!"
                alert("Coding world is waiting for you, " + yourName + "! 🤓");;
          } else {
              if (wantToLearn === "no" || wantToLearn === "n") {
              buttonChange.innerHTML = "<span class='no'>Thank you for your time, " + yourName + "."
                alert("Thank you for your time, " + yourName + ". 🙂");;
            } else {
              buttonChange.innerHTML = "<span class='spam'>⛔"
                alert("Only coders allowed! ⛔");
            }
        }
      }
      let knowButton = document.querySelector("button");
      knowButton.addEventListener("click", moreInfo);