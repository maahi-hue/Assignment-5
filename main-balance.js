document
  .getElementById("btn-add-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input");

    if (typeof addMoney === "number" && addMoney > 0) {
      const mainBalance = getTextFieldValueId("main-balance");
      console.log(mainBalance);
      const newMainBalance = mainBalance - addMoney;

      document.getElementById("main-balance").innerText = newMainBalance;
    } else {
      alert("failed");
    }
  });
