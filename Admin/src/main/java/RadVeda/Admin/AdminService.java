package RadVeda.Admin;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {

    private List<UserSignupRequest> signupRequests = new ArrayList<>();
    private List<AccountDeletionRequest> deletionRequests = new ArrayList<>();
    private List<AccountModificationRequest> modificationRequests = new ArrayList<>();
    private List<Admin> admins = new ArrayList<>();

    public List<UserSignupRequest> getSignupRequests() {
        return signupRequests;
    }

    public void addSignupRequest(Long adminId, UserSignupRequest signupRequest) {
        signupRequests.add(signupRequest);
    }

    public List<AccountDeletionRequest> getDeletionRequests() {
        return deletionRequests;
    }

    public void addDeleteRequest(Long adminId, AccountDeletionRequest deleteRequest) {
        deletionRequests.add(deleteRequest);
    }

    public List<AccountModificationRequest> getModificationRequests() {
        return modificationRequests;
    }

    public void addModifyRequest(Long adminId, AccountModificationRequest modifyRequest) {
        modificationRequests.add(modifyRequest);
    }

    public List<Admin> getAllAdmins() {
        return admins;
    }
}
