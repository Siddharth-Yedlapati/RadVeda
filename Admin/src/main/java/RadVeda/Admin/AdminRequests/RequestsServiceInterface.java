package RadVeda.Admin.AdminRequests;

import RadVeda.Admin.User;

import java.util.List;

public interface RequestsServiceInterface {

    String addUser(UserRequest request, Long adminId);

    UserDetails userInfo(Long Id);

    List<RequestsRecord> getRequest(Long adminId, String type);

    String accept(String authHeader, Long Id, Long aId);
    String decline(String authHeader, Long Id, Long aId);

    User authenticate(String AuthorizationHeader);


}
