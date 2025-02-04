package com.temelio.controller;

import com.temelio.dto.EmailRequestDTO;
import com.temelio.model.EmailLog;
import com.temelio.model.Nonprofit;
import com.temelio.service.EmailService;
import com.temelio.service.NonprofitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/emails")
public class EmailController {
    @Autowired
    private EmailService emailService;
    @Autowired
    private NonprofitService nonprofitService;


    @PostMapping("/send")
    public ResponseEntity<String> sendEmails(@RequestBody EmailRequestDTO request) {
        List<Nonprofit> nonprofits = nonprofitService.getAllNonprofits();
        emailService.sendBulkEmails(request.getSubject(), request.getContentTemplate(), request.getCc(), request.getBcc(), nonprofits);
        return ResponseEntity.ok("Emails sent successfully!");
    }

    @PostMapping("nonprofit")
    public ResponseEntity<String> sendEmailToNonprofit(@RequestBody EmailRequestDTO request){
        Optional<Nonprofit> existingNonprofitOpt = nonprofitService.getSingleNonprofit(request.getEmail());
        if(existingNonprofitOpt.isPresent()){
            emailService.sendEmailToNonprofit(request, existingNonprofitOpt.get());
            return ResponseEntity.ok("Email sent successfully to" + request.getEmail());
        }else {
            return ResponseEntity.status(404).body("Nonprofit not found with email" + request.getEmail());
        }
    }

    @GetMapping
    public List<EmailLog> getAllEmails(){
        return emailService.getAllEmails();
    }
}
