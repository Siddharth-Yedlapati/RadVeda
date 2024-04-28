package RadVeda.Analytics.Statistics;

public record RequestsStatisticsRequest(
        String requesterType,
        String requestType,
        String clientType,
        Long clientId) {
}
