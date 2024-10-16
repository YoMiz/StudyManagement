package com.example.app.mapper.user;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.User;

@Mapper
public interface UserMapper {
	User selectUserByUserName(String userName) throws Exception;
	
}
