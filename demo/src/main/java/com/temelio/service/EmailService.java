package com.temelio.service;

import com.temelio.model.EmailLog;
import com.temelio.model.Nonprofit;
import org.springframework.beans.factory.annotation.Autowired;
import com.temelio.repository.EmailLogRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EmailService {
    @Autowired
    private EmailLogRepository emailLogRepository;

    public void sendBulkEmails(String subject, String contentTemplate, List<Nonprofit> nonProfits){
        for (Nonprofit nonprofit : nonProfits){
            String content = contentTemplate
                    .replace("name", nonprofit.getName())
                    .replace("address", nonprofit.getAddress());
            logEmail(nonprofit.getEmail(), subject, content);
        }
    }

    private void logEmail(String recipientEmail, String subject, String content) {
        EmailLog log = new EmailLog();
        log.setRecipientEmail(recipientEmail);
        log.setSubject(subject);
        log.setContent(content);
        log.setSentAt(LocalDateTime.now());
        emailLogRepository.save(log);
    }

    public List<EmailLog> getAllEmails() {
        return emailLogRepository.findAll();
    }
}
