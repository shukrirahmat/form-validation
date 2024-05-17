const createInput = function createInput(input, error) {
    const isValid = () => {
        return input.validity.valid;
    }

    const clearError = () => {
        error.textContent = "";
    }

    
}