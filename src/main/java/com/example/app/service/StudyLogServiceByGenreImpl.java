package com.example.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.app.domain.StudyLog;
import com.example.app.domain.StudyLogsList;
import com.example.app.mapper.main.StudyLogByGenreMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudyLogServiceByGenreImpl implements StudyLogService {
	private final StudyLogByGenreMapper studyLogMapper;
	@Override
	public StudyLogsList showStudyLog(Integer userId) throws Exception {
		List<StudyLog> studyListParam = studyLogMapper.getStudyLogByGenre(userId);
		StudyLogsList studyList = new StudyLogsList();
		studyList.setStudyLogs(studyListParam);
		return studyList;
	}
	@Override
	public StudyLogsList showStudyLogByDays(Integer userId, Integer days) throws Exception {
		List<StudyLog> studyListParam = studyLogMapper.getStudyLogByGenreDays(userId, days);
		StudyLogsList studyList = new StudyLogsList();
		studyList.setStudyLogs(studyListParam);
		return studyList;
	}
	public StudyLogsList showAllStudyLogOfAGenre(Integer userId, Integer genreId)throws Exception{
		List<StudyLog> studyListParam = studyLogMapper.getAllStudyLogOfAGenre(userId, genreId);
		StudyLogsList studyList = new StudyLogsList();
		studyList.setStudyLogs(studyListParam);
		return studyList;
	}


}
