window.addEventListener(
  "load",
  function () {
    document.getElementById("stage-one").style.display = "block";
    document.getElementById("stage-two").style.display = "none";
    document.getElementById("stage-three").style.display = "none";
    document.getElementById("stage-four").style.display = "none";
    document.getElementById("stage-five").style.display = "none";

    document.getElementById("stage-one-image").style.display = "block";
    document.getElementById("stage-two-image").style.display = "none";
    document.getElementById("stage-three-image").style.display = "none";
    document.getElementById("stage-four-image").style.display = "none";
    document.getElementById("stage-five-image").style.display = "none";

    setTimeout(() => {
      document.getElementById("stage-one").style.display = "none";
      document.getElementById("stage-two").style.display = "block";

      document.getElementById("stage-one-image").style.display = "none";
      document.getElementById("stage-two-image").style.display = "block";
    }, 3000);

    setTimeout(() => {
      document.getElementById("stage-two").style.display = "none";
      document.getElementById("stage-three").style.display = "block";

      document.getElementById("stage-two-image").style.display = "none";
      document.getElementById("stage-three-image").style.display = "block";
    }, 6000);

    setTimeout(() => {
      document.getElementById("stage-three").style.display = "none";
      document.getElementById("stage-four").style.display = "block";

      document.getElementById("stage-three-image").style.display = "none";
      document.getElementById("stage-four-image").style.display = "block";
    }, 9000);

    setTimeout(() => {
      document.getElementById("stage-four").style.display = "none";
      document.getElementById("stage-five").style.display = "block";

      document.getElementById("stage-four-image").style.display = "none";
      document.getElementById("stage-five-image").style.display = "block";
    }, 12000);
  },
  false
);
