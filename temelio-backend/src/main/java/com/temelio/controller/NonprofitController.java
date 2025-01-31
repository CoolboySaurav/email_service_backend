package com.temelio.controller;

import com.temelio.dto.NonprofitDTO;
import com.temelio.model.Nonprofit;
import com.temelio.service.NonprofitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/nonprofits")
public class NonprofitController {

    @Autowired
    private NonprofitService nonprofitservice;

    @PostMapping
    public ResponseEntity<Nonprofit> createNonprofits(@RequestBody NonprofitDTO dto){
        Nonprofit nonprofit = new Nonprofit();
        nonprofit.setName(dto.getName());
        nonprofit.setAddress(dto.getAddress());
        nonprofit.setEmail(dto.getEmail());
        System.out.println(nonprofit.getName());
        return ResponseEntity.ok(nonprofitservice.saveNonprofit(nonprofit));
    }

    @GetMapping
    public List<Nonprofit> getAllNonprofits(){
        return nonprofitservice.getAllNonprofits();
    }

    @PutMapping
    public ResponseEntity<Nonprofit> updateNonprofits(@RequestBody NonprofitDTO dto){
        Nonprofit updatedNonprofit = nonprofitservice.updateNonprofit(dto);
        if(updatedNonprofit != null){
            return ResponseEntity.ok(updatedNonprofit);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping
    public ResponseEntity<Boolean> removeNonprofits(@RequestBody NonprofitDTO dto){
        return ResponseEntity.ok(nonprofitservice.deleteNonprofit(dto.getEmail()));
    }


}
