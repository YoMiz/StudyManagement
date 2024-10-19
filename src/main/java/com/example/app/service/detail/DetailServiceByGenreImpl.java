package com.example.app.service.detail;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.app.domain.StudyLogsList;
import com.example.app.mapper.detail.DetailLogByGenreMapper;

import lombok.RequiredArgsConstructor;

@Service
@Primary
@RequiredArgsConstructor
public class DetailServiceByGenreImpl implements DetailService{
	private final DetailLogByGenreMapper detailLogMapper;
	
	@Override
	public StudyLogsList showDetailStudyLog(Integer userId, Integer id)throws Exception{
		
		return null;
	}

	@Override
	public StudyLogsList showDetailStudyLogByDays(Integer userId, Integer Id) throws Exception {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}
}
