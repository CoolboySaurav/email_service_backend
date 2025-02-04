package com.temelio.service;

import com.temelio.dto.EmailRequestDTO;
import com.temelio.model.EmailLog;
import com.temelio.model.Nonprofit;
import com.temelio.repository.EmailLogRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
public class EmailService {
    @Autowired
    private EmailLogRepository emailLogRepository;

    public void sendBulkEmails(String subject, String contentTemplate, List<String> ccEmails, List<String> bccEmails, List<Nonprofit> nonProfits) {
        if (nonProfits.isEmpty()) {
            throw new RuntimeException("No nonprofits to send emails to");
        }
        try {
            Pattern pattern = Pattern.compile("\\{(.*?)}");
            Matcher matcher = pattern.matcher(contentTemplate);

            while (matcher.find()) {
                String key = matcher.group(1);
                if (!key.equals("name") && !key.equals("address")) {
                    throw new RuntimeException("Invalid key: " + key);
                }
            }
            for (Nonprofit nonprofit : nonProfits) {
                String content = contentTemplate
                        .replace("{name}", nonprofit.getName())
                        .replace("{address}", nonprofit.getAddress());

                log.info("Sending email to: {}", nonprofit.getEmail());
                logEmail(nonprofit.getEmail(), subject, content, ccEmails, bccEmails);
            }
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    private void logEmail(String recipientEmail, String subject, String content, List<String> ccEmails, List<String> bccEmails) {
        EmailLog log = new EmailLog();
        log.setRecipientEmail(recipientEmail);
        log.setSubject(subject);
        log.setContent(content);
        log.setCc(ccEmails);
        log.setBcc(bccEmails);
        log.setSentAt(LocalDateTime.now());
        emailLogRepository.save(log);
    }
    
    public List<EmailLog> getAllEmails() {
        return emailLogRepository.findAll();
    }

    public void sendEmailToNonprofit(EmailRequestDTO request, Nonprofit nonprofit) {
        String contentTemplate = request.getContentTemplate();
        String content = contentTemplate
                .replace("name", nonprofit.getName())
                .replace("address", nonprofit.getAddress());
        logEmail(nonprofit.getEmail(), request.getSubject(), content);
    }
}
