document
  .getElementById("btn-add-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input");

    if (typeof addMoney === "number" && addMoney > 0) {
      const balance = getTextFieldValueId("account-balance");
      const newBalance = balance + addMoney;

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed");
    }
  });
