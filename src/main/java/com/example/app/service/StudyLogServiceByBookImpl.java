package com.example.app.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.app.domain.StudyLog;
import com.example.app.domain.StudyLogsList;
import com.example.app.domain.User;
import com.example.app.mapper.StudyLogByBookMapper;

import lombok.RequiredArgsConstructor;

@Service
@Primary
@RequiredArgsConstructor
public class StudyLogServiceByBookImpl implements StudyLogService {
    private final StudyLogByBookMapper studyLogMapper;

    @Transactional
    public void updateStudyLogByBookId(StudyLogsList updateStudyLogsList, User user) throws Exception {
        Integer userId = user.getUserId();
        LocalDateTime today = LocalDateTime.now();
        ArrayList<StudyLog> updateStudyLogsListUpdated = new ArrayList<StudyLog>();
        for (StudyLog studyLog : updateStudyLogsList.getStudyLogs()) {
            if (studyLog.getUpdateCheck() != null && studyLog.getUpdateCheck() == 1) {
                StudyLog updateStudyLog = new StudyLog();
                updateStudyLog.setUserId(userId);
                updateStudyLog.setBookId(studyLog.getBookId());
                updateStudyLog.setDate(Timestamp.valueOf(today));

                if (studyLog.getTime() == null) {
                    updateStudyLog.setSumOfTime(0.0); // double型に変更
                } else {
                    updateStudyLog.setTime(studyLog.getTime());
                }

                if (studyLog.getStatus() == null) {
                    updateStudyLog.setStatus(0);
                } else {
                    updateStudyLog.setStatus(studyLog.getStatus());
                }
                if(studyLog.getComment() == null) {
                    updateStudyLog.setComment(null);
                }else {
                    updateStudyLog.setComment(studyLog.getComment());
                }

                updateStudyLogsListUpdated.add(updateStudyLog);
            }
        }

        for (StudyLog studyLog : updateStudyLogsListUpdated) {
            studyLogMapper.insertStudyLog(studyLog);
            studyLogMapper.updateBookStatus(studyLog);
        }
    }

    @Override
    public StudyLogsList showStudyLog(Integer userId) throws Exception {
        List<StudyLog> studyListParam = studyLogMapper.getStudyLogByBook(userId);
        StudyLogsList studyList = new StudyLogsList();
        studyList.setStudyLogs(studyListParam);
        return studyList;
    }

    @Override
    public StudyLogsList showStudyLogByDays(Integer userId, Integer days) throws Exception {
        List<StudyLog> studyListParam = studyLogMapper.getStudyLogByBookDays(userId, days);
        StudyLogsList studyList = new StudyLogsList();
        studyList.setStudyLogs(studyListParam);
        return studyList;
    }
    
    public StudyLogsList showStudyLogByBookDone(Integer userId) throws Exception {
        List<StudyLog> studyListParam = studyLogMapper.getStudyLogByBookDone(userId);
        StudyLogsList studyList = new StudyLogsList();
        studyList.setStudyLogs(studyListParam);
        return studyList;
    }
    
    public StudyLogsList showStudyLogByBookDoneDays(Integer userId, Integer days) throws Exception{
        List<StudyLog> studyListParam = studyLogMapper.getStudyLogByBookDoneDays(userId, days);
        StudyLogsList studyList = new StudyLogsList();
        studyList.setStudyLogs(studyListParam);
        return studyList;
    }
}
