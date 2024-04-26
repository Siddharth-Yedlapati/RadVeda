package RadVeda.SuperAdmin.SuperAdminRequests;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class NgrokIntegration {
    public static void main(String[] args) throws IOException, InterruptedException {
        // Set the port number for your Java service
        int portNumber = 8080;

        // Start Ngrok as a separate process
        ProcessBuilder ngrokProcessBuilder = new ProcessBuilder("ngrok", "http", String.valueOf(portNumber));
        Process ngrokProcess = ngrokProcessBuilder.start();

        // Capture Ngrok's output
        BufferedReader reader = new BufferedReader(new InputStreamReader(ngrokProcess.getInputStream()));
        String line;
        String ngrokUrl = null;
        while ((line = reader.readLine()) != null) {
            if (line.contains("Forwarding")) {
                ngrokUrl = line.trim().split(" ")[1];
                break;
            }
        }
        reader.close();

        // Check if Ngrok URL is obtained successfully
        if (ngrokUrl != null) {
            System.out.println("Ngrok URL: " + ngrokUrl);

            // Use the Ngrok URL in your service
            // YourServiceClass.setNgrokUrl(ngrokUrl);

            // Keep the process running until it's manually terminated
            ngrokProcess.waitFor();
        } else {
            System.err.println("Failed to obtain Ngrok URL.");
        }
    }
}
