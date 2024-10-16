package com.example.app.service.user;

import com.example.app.domain.User;

public interface UserService {
	boolean isCorrectUserNameAndUserPassword(String userName, String userPassword) throws Exception;
	User selectUserByUserName(String userName) throws Exception;
}
