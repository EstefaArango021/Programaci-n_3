package com.miempresa.ejemplo03;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Mostrar {
	
    @GetMapping("/")
	public String imprimir() {
	
	  return "index";
		
	}
}
