package RadVeda.ConsentManagement.exception;

public class UnauthorisedUserException extends RuntimeException{
    public UnauthorisedUserException(String message) {
        super(message);
    }
}
