package com.miempresa.ejercicio1;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class Articulo {
	
    @GetMapping(value = "/principal")
	public String ejercicio() {
	
	  return "ejercicio";
		
	}
	
}

