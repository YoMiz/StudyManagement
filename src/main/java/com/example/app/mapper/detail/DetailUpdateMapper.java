package com.example.app.mapper.detail;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DetailUpdateMapper {
	public void updateStudyLog(Integer userId, Integer logId, Double time, String comment)throws Exception;
}
