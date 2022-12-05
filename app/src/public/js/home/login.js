"use strict"

const id  = document.querySelector("#id"),
      pwd = document.querySelector("#pwd"),
      btn = document.querySelector("button")

btn.addEventListener("click", login); 

function login() {
    const req = {
        id: id.value,
        pwd: pwd.value,
    };
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("Login ing Error"));
            //console.error("Login ing Error");
        });

        //.then(console.log); //아래와 동일함.
        //.then((res) => console.log(res));
   
};
