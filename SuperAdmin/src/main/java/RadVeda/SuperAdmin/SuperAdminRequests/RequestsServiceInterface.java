package RadVeda.SuperAdmin.SuperAdminRequests;

import RadVeda.SuperAdmin.User;

import java.util.List;

public interface RequestsServiceInterface {

    String addUser(UserRequest request);

    UserDetails userInfo(Long Id);

    List<Requests> getRequest(String type);

    String accept(String authHeader, Long Id);
    void decline(Long Id);

    User authenticate(String AuthorizationHeader);


}
