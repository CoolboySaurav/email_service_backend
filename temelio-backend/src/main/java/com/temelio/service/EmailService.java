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

    public void sendBulkEmails(EmailRequestDTO request, List<Nonprofit> nonprofits){
        if(nonprofits.isEmpty()){
            throw new RuntimeException("No nonprofits to send emails to");
        }

        String contentTemplate = request.getContentTemplate();
        for (Nonprofit nonprofit : nonprofits){
            String content = contentTemplate
                    .replace("name", nonprofit.getName())
                    .replace("address", nonprofit.getAddress());
            log.info("Sending email to: {}", nonprofit.getEmail());
            logEmail(nonprofit.getEmail(), request.getSubject(), content);

        }
    }

    private void logEmail(String recipientEmail, String subject, String content){
        EmailLog log = new EmailLog();
        log.setRecipientEmail(recipientEmail);
        log.setContent(content);
        log.setSubject(subject);
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
