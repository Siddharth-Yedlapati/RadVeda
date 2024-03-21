package RadVeda.NotificationManagement.Notifications;

public record OneWayNotificationRequest(
        String message,
        String recipientType,
        Long recipientId) {
}
