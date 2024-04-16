package RadVeda.Admin.SignupRequest;

public record SignupRequestRequest(
        Long userId,
        String userType,
        Long adminId
) {}
