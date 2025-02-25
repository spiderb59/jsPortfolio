window.onload = function () {
  $(window).scroll(scrolling);
  $(window).resize(scrolling);

  var angle = document.getElementsByClassName("angle");
  var msg = document.getElementsByClassName("msg");
  var i;

  for (i = 0; i < angle.length; i++) {
    const rect = angle[i].getBoundingClientRect();
    if (
      rect.top >= -window.innerHeight &&
      rect.top <= window.innerHeight + window.innerHeight / 3
    ) {
      angle[i].style.left =
        Math.round(window.innerWidth * 0.45 + rect.top / 2.125) + "px";
    } else {
    }
  }

  document.getElementById("mask").style.border = "105vh solid #fff";
  var clipboard = new ClipboardJS(".btn", {
    text: function () {
      return "hey@shitalmainali.com.np";
    },
  });

  clipboard.on("success", function (e) {
    document.getElementById("copied").innerHTML = "Email Address copied!";
  });

  clipboard.on("error", function (e) {
    document.getElementById("copied").innerHTML =
      "Looks like you have to do it manually:<br>hey@shitalmainali.com.np";
  });

  function scrolling() {
    document.getElementById("carlight").style.opacity = "0";

    if (window.pageYOffset <= window.innerHeight) {
      document.getElementById("topgradient").style.opacity =
        1 - window.pageYOffset / 300;
      document.getElementById("topgradient").style.display = "block";
    } else {
      document.getElementById("topgradient").style.display = "none";
    }

    for (i = 0; i < angle.length; i++) {
      const rect = angle[i].getBoundingClientRect();
      if (
        rect.top >= -window.innerHeight &&
        rect.top <= window.innerHeight + window.innerHeight / 3
      ) {
        angle[i].style.left =
          Math.round(window.innerWidth * 0.45 + rect.top / 2.125) + "px";
      } else {
      }
    }

    for (i = 0; i < msg.length; i++) {
      const rect = msg[i].getBoundingClientRect();
      if (
        rect.top >= -window.innerHeight &&
        rect.top <= window.innerHeight * 0.9
      ) {
        msg[i].style.opacity = "1";
      } else {
        msg[i].style.opacity = "0";
      }
    }
    if (
      window.pageYOffset >=
      document.documentElement.scrollHeight - window.innerHeight * 1.05
    ) {
      document.getElementById("road").style.opacity = "0";
      document.getElementById("plosig").style.opacity = "1";
    } else {
      document.getElementById("road").style.opacity = "1";
      document.getElementById("plosig").style.opacity = "0";
    }
  }

  // Setup isScrolling variable
  var isScrolling;

  // Listen for scroll events
  window.addEventListener(
    "scroll",
    function (event) {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        // Run the callback
        document.getElementById("carlight").style.opacity = "1";
      }, 100);
    },
    false,
  );
};

