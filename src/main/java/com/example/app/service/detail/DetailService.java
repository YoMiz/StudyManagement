package com.example.app.service.detail;

import com.example.app.domain.StudyLogsList;

public interface DetailService {
	StudyLogsList showDetailStudyLog(Integer userId, Integer id) throws Exception;
	StudyLogsList showDetailStudyLogByDays(Integer userId, Integer Id)throws Exception;
}
