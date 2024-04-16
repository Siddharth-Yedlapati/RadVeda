package RadVeda.Admin.SignupRequest;

        import java.util.List;
        import java.util.Optional;

public interface SignupRequestInterface {

    SignupRequest addSignupRequest(SignupRequestRequest request);

    void deleteSignupRequest(Long id);

    List<SignupRequest> getAllSignupRequests();

    Optional<SignupRequest> getSignupRequestById(Long id);
    List<SignupRequest> getSignupRequestsOfAdmin(Long adminId);


}
