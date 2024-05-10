package RadVeda.UserManagement.security.transitEncryption;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.EntityNotFoundException;

import java.security.*;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.X509EncodedKeySpec;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.util.Random;
import java.time.LocalDate;
import java.time.ZoneId;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.*;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class EncryptionService {

    private PrivateKey privateKey;
    private PublicKey publicKey;
    private Map<String, PublicKey> servicePublicKeys = new HashMap<>();
    private int count;
    private static final String delimiter = ":_:";
    private final EncryptionRepository encryptionRepository;


    public Map<String, String> getMap_ports() {
        Map<String, String> map_ports = new HashMap<>();
        map_ports.put("UMS", "9191");
        map_ports.put("TMS", "9192");
        map_ports.put("NMS", "9193");
        map_ports.put("doctor", "9194");
map_ports.put("collaboration", "9195");
map_ports.put("superAdmin", "9196");
        map_ports.put("admin", "9197");
        map_ports.put("patient", "9198");
        map_ports.put("LabStaff", "9199");
        map_ports.put("IMS", "9200");
        map_ports.put("radiologist", "9201");
        map_ports.put("CMS", "9202");
        map_ports.put("analytics", "9203");


        return map_ports;
    }

    @Scheduled(fixedDelay = (long) (2 * 60 * 1000))
    public void generateKeys() {
        try {
            count = 0;
            KeyPairGenerator gen = KeyPairGenerator.getInstance("RSA");
            gen.initialize(2048);

            KeyPair userManagement = gen.generateKeyPair();
            privateKey = userManagement.getPrivate();
            publicKey = userManagement.getPublic();

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int addPublicKey(String serviceName,  byte[] keyBytes) {

        try {
            if (!servicePublicKeys.containsKey(serviceName)) {
                System.out.println(serviceName);
                X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);
                KeyFactory keyFactory = KeyFactory.getInstance("RSA");
                PublicKey pKey =  keyFactory.generatePublic(keySpec);
                servicePublicKeys.put(serviceName, pKey);
                count += 1;
            }
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        return count;
    }

    public void generateSharedKeys() {

        List<String> services = List.copyOf(servicePublicKeys.keySet());

        if(services.size() > 1) {

            List<List<String>> pairs = getPairs(services);

            for (List<String> pair : pairs) {
                String service1 = pair.get(0);
                String service2 = pair.get(1);

                try {
                    sendSharedKeysToService(service1, service2);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        for(String service: services) {

            try {
                String sharedKey = service+delimiter+"UMS";
                byte[] encryptedKey = encrypt(sharedKey, servicePublicKeys.get(service));

                HttpHeaders headers = new HttpHeaders();
                RestTemplate restTemplate = new RestTemplate();
                headers.setContentType(MediaType.APPLICATION_OCTET_STREAM); // Set content type as octet-stream

                HttpEntity<byte[]> requestEntity = new HttpEntity<>(encryptedKey, headers);

                ResponseEntity<String> res  = restTemplate.exchange("http://localhost:"+getMap_ports().get(service)+"/encryptor/sharedKey/UMS", HttpMethod.POST, requestEntity, String.class);
                if(!res.getBody().equalsIgnoreCase("success")) {
                    return;
                }

                SharedKeys key = new SharedKeys();
                key.setServiceName(service);
                key.setSharedKey(sharedKey);
                encryptionRepository.save(key);

            }
            catch (Exception e) {
                e.printStackTrace();
            }
        }

        count = 0;
        servicePublicKeys = new HashMap<>();
        System.out.println("making dummy call");
    }

    private void sendSharedKeysToService(String service1, String service2) throws  Exception {
        String sharedKey = service1+delimiter+service2;

        byte[] encryptedKeyS1 = encrypt(sharedKey, servicePublicKeys.get(service1));

        // Encrypt the shared key with Service B's public key
        byte[] encryptedKeyS2 = encrypt(sharedKey, servicePublicKeys.get(service2));

        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM); // Set content type as octet-stream

        HttpEntity<byte[]> requestEntity1 = new HttpEntity<>(encryptedKeyS1, headers);
        HttpEntity<byte[]> requestEntity2 = new HttpEntity<>(encryptedKeyS2, headers);

        ResponseEntity<String> res1 = restTemplate.exchange("http://localhost:"+getMap_ports().get(service1)+"/encryptor/sharedKey/"+service2, HttpMethod.POST, requestEntity1, String.class);
        if(res1.getBody()!=null && res1.getBody().equalsIgnoreCase("success")) {
            System.out.println(res1);
        }

        ResponseEntity<String> res2 = restTemplate.exchange("http://localhost:"+getMap_ports().get(service2)+"/encryptor/sharedKey/"+service1, HttpMethod.POST, requestEntity2, String.class);
        if(res2.getBody()!=null && res2.getBody().equalsIgnoreCase("success")) {
            System.out.println(res2);
        }

    }

    private static byte[] encrypt(String data, PublicKey publicKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        return cipher.doFinal(data.getBytes());
    }


    private static List<List<String>> getPairs(List<String> columnNames) {
        List<List<String>> combinations = new ArrayList<>();
        generateCombinations(columnNames, 2, 0, new ArrayList<>(), combinations);
        return combinations;
    }
    private static void generateCombinations(List<String> columnNames, int level, int start, List<String> current, List<List<String>> combinations) {
        if (current.size() == level) {
            combinations.add(new ArrayList<>(current));
            return;
        }
        for (int i = start; i < columnNames.size(); i++) {
            current.add(columnNames.get(i));
            generateCombinations(columnNames, level, i + 1, current, combinations);
            current.remove(current.size() - 1);
        }
    }


}
