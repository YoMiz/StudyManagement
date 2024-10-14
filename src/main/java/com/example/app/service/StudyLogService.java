package com.example.app.service;

import com.example.app.domain.StudyLogsList;

public interface StudyLogService {
	StudyLogsList showStudyLog(Integer userId) throws Exception;
	StudyLogsList showStudyLogByDays(Integer userId, Integer days) throws Exception;
}
