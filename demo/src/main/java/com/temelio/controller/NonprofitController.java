package com.temelio.controller;

import com.temelio.dto.NonprofitDTO;
import com.temelio.model.Nonprofit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.temelio.service.NonprofitService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/nonprofits")
public class NonprofitController {
    @Autowired
    private NonprofitService nonprofitService;

    @PostMapping
    public ResponseEntity<Nonprofit> createNonprofit(@RequestBody NonprofitDTO dto) {
        Nonprofit nonprofit = new Nonprofit();
        nonprofit.setName(dto.getName());
        nonprofit.setAddress(dto.getAddress());
        nonprofit.setEmail(dto.getEmail());
        return ResponseEntity.ok(nonprofitService.saveNonprofit(nonprofit));
    }

    @GetMapping
    public List<Nonprofit> getAllNonprofits() {
        return nonprofitService.getAllNonprofits();
    }
}
