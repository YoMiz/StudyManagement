package com.example.app.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.StudyLog;
@Mapper
public interface StudyLogByBookMapper {
    List<StudyLog> getStudyLogByBook(Integer userId) throws Exception;
    List<StudyLog> getStudyLogByBookDays(Integer userId, Integer days) throws Exception;
    List<StudyLog> getStudyLogByBookDone(Integer userId) throws Exception;
    List<StudyLog> getStudyLogByBookDoneDays(Integer userId, Integer days) throws Exception;
    void updateBookStatus(StudyLog studyLog);
    void insertStudyLog(StudyLog studyLog);
}
