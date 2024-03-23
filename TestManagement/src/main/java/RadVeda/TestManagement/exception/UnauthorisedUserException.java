package RadVeda.TestManagement.exception;

public class UnauthorisedUserException extends RuntimeException{
    public UnauthorisedUserException(String message) {
        super(message);
    }
}
