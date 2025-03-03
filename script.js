class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.object = ValidationError
    }
}

function validateUsername(username) {
    if (username.length < 10) {
        throw new Error("Username is less than 10 characters.");
    }
    return "Username is Valid";
}


try {
    console.log(validateUsername("abc"));
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
} finally {
    console.log("Execution completed.");
}