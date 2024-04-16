//package RadVeda.Admin.AdminDoc;
//import RadVeda.Admin.User;
//import RadVeda.Admin.Admin.Admin;
//
//import java.util.List;
//import java.util.Optional;
//
//
//public interface AdminDocServiceInterface {
//        AdminDoc addDocforAdmin(AdminDocRequest request);
//        void deleteRecord(Long Id);
//        List<Long> getDocsOfAdmin(Long Doc_Id);
//        Optional<Doctor> getDocs(Long Doc_id);
//        User authenticate(String AuthorizationHeader);
//    }
//}

package RadVeda.Admin.AdminDoc;

import RadVeda.Admin.User;

import java.util.List;
import java.util.Optional;

public interface AdminDocServiceInterface {
        AdminDoc addDocforAdmin(AdminDocRequest request);
        void deleteRecord(Long id);
        List<Long> getDocsOfAdmin(Long adminID);
        Optional<AdminDoc> getDocs(Long docId);
        User authenticate(String authorizationHeader);
}
