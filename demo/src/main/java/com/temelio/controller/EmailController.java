package com.temelio.controller;

import com.temelio.dto.EmailRequestDTO;
import com.temelio.model.EmailLog;
import com.temelio.model.Nonprofit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.temelio.service.EmailService;
import com.temelio.service.NonprofitService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/emails")
public class EmailController {
    @Autowired
    private EmailService emailService;
    @Autowired
    private NonprofitService nonprofitService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmails(@RequestBody EmailRequestDTO request) {
        List<Nonprofit> nonprofits = nonprofitService.getAllNonprofits();
        emailService.sendBulkEmails(request.getSubject(), request.getContentTemplate(), nonprofits);
        return ResponseEntity.ok("Emails sent successfully!");
    }

    @GetMapping("/fetch")
    public List<EmailLog> getAllEmails(){
        return emailService.getAllEmails();
    }
}
