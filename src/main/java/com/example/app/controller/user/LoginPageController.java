package com.example.app.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.app.domain.User;
import com.example.app.service.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class LoginPageController {
	private final UserService userService;
	
	@GetMapping("/loginPage")
	public String showLoginPage(Model model, User user)throws Exception{
		model.addAttribute("user", user);
		return "Front/LoginPage";
	}
	@PostMapping("/loginCheck")
	public String loginCheck(HttpSession session, @Valid User user, Errors errors, BindingResult bindingResult)throws Exception{
		if(bindingResult.hasErrors()){
			System.out.println("hasErrors");
			return "redirect/loginPage";
		}
		if(!userService.isCorrectUserNameAndUserPassword(user.getUserName(),user.getUserPassword())) {
			bindingResult.rejectValue("userName", "error.incorrect_id_password");
			System.out.println("incorrect");
			return "redirect:/loginPage";
		}
		String userName = user.getUserName();
		user = userService.selectUserByUserName(userName);
		session.setAttribute("user", user);
		
		return "redirect:/main";
	}
}
