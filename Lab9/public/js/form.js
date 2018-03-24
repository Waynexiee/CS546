/**
 * Created by xiewangzhi on 24/03/2018.
 */
(function() {
  const Palindrome = {
    checkPalindrome(text) {
      if (!text) throw "No text provided";
      let m_text = text.split(/[^a-zA-Z0-9]| /).join('').toLowerCase();
      return m_text.split('').reverse().join('') === m_text;
    }
  };

  const staticForm = document.getElementById("static-form");

  if (staticForm) {
    // We can store references to our elements; it's better to
    // store them once rather than re-query the DOM traversal each time
    // that the event runs.
    const inputText = document.getElementById("input-text");

    const errorContainer = document.getElementById("error-container");
    const errorTextElement = errorContainer.getElementsByClassName(
      "text-goes-here"
    )[0];

    const resultContainer = document.getElementById("result-container");
    const resultTextElement = document.getElementById("attempts");
    // We can take advantage of functional scoping; our event listener has access to its outer functional scope
    // This means that these variables are accessible in our callback
    staticForm.addEventListener("submit", event => {
      event.preventDefault();

      try {
        // hide containers by default
        errorContainer.classList.add("hidden");
        resultContainer.classList.add("hidden");

        // Values come from inputs as strings, no matter what :(
        const inputTextValue = inputText.value;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputTextValue));
        if (Palindrome.checkPalindrome(inputTextValue)) {
          li.setAttribute("class", "is-palindrome");
        } else {
          li.setAttribute("class", "not-palindrome");
        }
        resultTextElement.appendChild(li);
        resultContainer.classList.remove("hidden");
      } catch (e) {
        errorTextElement.textContent = typeof e === "string" ? e : e.message;
        errorContainer.classList.remove("hidden");
      }
    });
  }
})();