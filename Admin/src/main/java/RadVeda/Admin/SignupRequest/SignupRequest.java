package RadVeda.Admin.SignupRequest;

import RadVeda.Admin.Admin.Admin;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "signup_request")
@DiscriminatorValue("AdminDB")

public class SignupRequest {
                @Id
                @GeneratedValue(strategy = GenerationType.IDENTITY)
                private Long id;

                @ManyToOne(cascade = CascadeType.ALL)
                @JoinColumn(name = "Admin_ID", referencedColumnName = "id")
                private Admin admin;

                @Column(name = "user_id", nullable = false)
                private Long userId;

                @Column(name = "user_type", nullable = false)
                private String userType;

                @Column(name = "approval_status", nullable = false)
                private String approvalStatus = "PENDING";

                @Column(name = "approval_date")
                private LocalDateTime approvalDate;


    }
