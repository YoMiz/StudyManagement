package com.example.app.service;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.example.app.domain.User;
import com.example.app.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	private final UserMapper mapper;

	@Override
	public boolean isCorrectUserNameAndUserPassword(String userName, String userPassword) throws Exception {
		User user = mapper.selectUserByUserName(userName);
		if (user == null) {
			return false;
		}
		if (!BCrypt.checkpw(userPassword, user.getUserPassword())) {
			return false;
		}
		return true;
	}

	@Override
	public User selectUserByUserName(String userName) throws Exception {
		User user = mapper.selectUserByUserName(userName);
		return user;
	}
}
