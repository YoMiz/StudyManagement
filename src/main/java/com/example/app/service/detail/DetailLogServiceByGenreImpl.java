package com.example.app.service.detail;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.app.domain.StudyLog;
import com.example.app.domain.StudyLogsList;
import com.example.app.mapper.detail.DetailLogByGenreMapper;

import lombok.RequiredArgsConstructor;

@Service
@Primary
@RequiredArgsConstructor
public class DetailLogServiceByGenreImpl implements DetailLogService{
	private final DetailLogByGenreMapper detailLogMapper;
	
	@Override
	public StudyLogsList showDetailLog(Integer userId, Integer dataId)throws Exception{
		List<StudyLog> studyListParam = detailLogMapper.getDetailLogGenre(userId, dataId);
		StudyLogsList detailList = new StudyLogsList();
		detailList.setStudyLogs(studyListParam);
		return detailList;
	}

	@Override
	public StudyLogsList showDetailLogDays(Integer userId, Integer dataId, Integer days) throws Exception {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}
}
