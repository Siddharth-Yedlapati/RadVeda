package RadVeda.NotificationManagement.Notifications;

public record ChatNotificationRequest(
        String message,
        String recipientType,
        Long recipientId,
        Long chatID) {
}
