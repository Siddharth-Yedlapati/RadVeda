package RadVeda.SuperAdmin.SuperAdminRequests;

public record AceeptRecord(Long adminId,
                           String firstName,
                           String middleName,
                           String lastName,
                           String addressL1,
                           String addressL2,
                           String country,
                           String state,
                           String city,
                           String email,
                           String phoneNumber,
                           String role,
                           String orgName,
                           String orgAddressL1,
                           String orgAddressL2) {
}
