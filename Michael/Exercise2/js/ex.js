var turn = 1;
counterblue = 0;
counterred = 0;
function dice() {
  if (turn === 1) {
    let val = Math.floor(Math.random() * 6 + 1);
    let div1 = document.getElementById("left");
    div1.querySelector(".throw").innerHTML = val;
    counterblue = counterblue + val;
    div1.querySelector(".count").innerHTML = counterblue;
    if (counterblue > 20) {
      turn = 0;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You won!",
        showConfirmButton: true,
      });
    }
    //bot plays
    else {
      let val2 = Math.floor(Math.random() * 6 + 1);
      let div2 = document.getElementById("right");
      div2.querySelector(".throw").innerHTML = val2;
      counterred = counterred + val2;
      div2.querySelector(".count").innerHTML = counterred;
      if (counterred > 20) {
        turn = 0;
        Swal.fire({
          position: "center",
          icon: "error",
          title: "You lost!",
          showConfirmButton: true,
        });
      }
    }
  }
}
document.getElementById("roll").addEventListener("click", dice);
//Delete later!
// let d = document.getElementById("test");
// d.addEventListener("click", function () {
//   Swal.fire({
//     imageUrl: "https://placeholder.pics/svg/300x1500",
//     imageHeight: 500,
//     imageAlt: "A tall image",
//   });
// });
// Swal.fire({
//   position: "center",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: true,
// });
