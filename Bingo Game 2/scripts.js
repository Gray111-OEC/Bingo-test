document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const passwordInput = document.getElementById("passwordInput");
    const submitButton = document.getElementById("submitPassword");

    // Track the correct cells
    let correctCells = new Set();

    // Add event listener for submit button
    submitButton.addEventListener("click", () => {
        const enteredPassword = passwordInput.value.trim();
        let passwordMatched = false;

        // Check each cell's password
        cells.forEach((cell) => {
            const cellPassword = cell.getAttribute("data-password");
            if (cellPassword && enteredPassword === cellPassword) {
                // Mark the cell as correct if password matches
                if (!cell.classList.contains("correct")) {
                    cell.classList.add("correct");
                    correctCells.add(cell);
                }
                passwordMatched = true;
            }
        });

        if (passwordMatched) {
            alert("Correct password!");
        } else {
            alert("Incorrect password. 😞 Please try again. Remember the password is case sensitive.");
        }

        // Clear the input field
        passwordInput.value = "";

        // Check for win condition
        checkWinCondition();
    });

    function checkWinCondition() {
        // A win occurs only when all cells (except free space) are correct
        const allCellsCorrect = Array.from(cells).every((cell) => {
            return cell.classList.contains("correct") || cell.classList.contains("free-space-cell");
        });

        if (allCellsCorrect) {
            alert("Congratulations! You've found all of the Microlearnings passwords! Standby to be entered into the Raffle!");
            
          // Redirect to the Microsoft Forms page
            window.location.href = "https://forms.office.com/r/UXwSEFEmQw";
        }
    }
});
