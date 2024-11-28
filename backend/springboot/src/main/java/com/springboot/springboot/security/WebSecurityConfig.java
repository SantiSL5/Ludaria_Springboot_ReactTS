package com.springboot.springboot.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.cors((cors) -> cors
            .configurationSource(apiConfigurationSource())
            )
            .csrf(csrf -> csrf.disable())
            .authorizeRequests()
            .requestMatchers("/api/**").permitAll();

    return http.build();
  }

  @Bean
  public CorsConfigurationSource apiConfigurationSource() {
    CorsConfiguration corsConfig = new CorsConfiguration();
    corsConfig.applyPermitDefaultValues();
    corsConfig.addAllowedMethod("GET");
    corsConfig.addAllowedMethod("PUT");
    corsConfig.addAllowedMethod("PATCH");
    corsConfig.addAllowedMethod("POST");
    corsConfig.addAllowedMethod("DELETE");
    corsConfig.addAllowedMethod("OPTIONS");
    corsConfig.setAllowedOrigins(Arrays.asList("*"));
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", corsConfig);
    return source;
  }

}