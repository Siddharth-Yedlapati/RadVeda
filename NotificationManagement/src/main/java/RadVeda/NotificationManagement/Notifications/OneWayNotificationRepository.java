package RadVeda.NotificationManagement.Notifications;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OneWayNotificationRepository extends JpaRepository<OneWayNotification, Long> {
}
