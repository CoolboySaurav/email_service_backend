package com.temelio.dto;

import lombok.Data;

@Data
public class EmailRequestDTO {
    private  String email;
    private String subject;
    private String contentTemplate;
}
