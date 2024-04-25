package RadVeda.Analytics.Statistics;

public record AccountStatisticsRequest(
        String accountHolderType,
        String accountOperationType,
        String clientType,
        Long clientId) {
}
