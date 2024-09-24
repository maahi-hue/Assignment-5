// noakhali
document
  .getElementById("btn-add-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input");

    if (typeof addMoney === "number" && addMoney > 0) {
      const mainBalance = getTextFieldValueId("main-balance");

      const newMainBalance = mainBalance - addMoney;

      document.getElementById("main-balance").innerText = newMainBalance;
    } else {
      alert("failed");
    }
  });

// feni
document
  .getElementById("btn-add-donation2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input2");

    if (typeof addMoney === "number" && addMoney > 0) {
      const mainBalance = getTextFieldValueId("main-balance");

      const newMainBalance = mainBalance - addMoney;

      document.getElementById("main-balance").innerText = newMainBalance;
    } else {
      alert("failed");
    }
  });

// quota
document
  .getElementById("btn-add-donation3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input3");

    if (typeof addMoney === "number" && addMoney > 0) {
      const mainBalance = getTextFieldValueId("main-balance");

      const newMainBalance = mainBalance - addMoney;

      document.getElementById("main-balance").innerText = newMainBalance;
    } else {
      alert("failed");
    }
  });
