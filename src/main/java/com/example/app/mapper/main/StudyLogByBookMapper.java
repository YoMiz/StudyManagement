package com.example.app.mapper.main;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.StudyLog;
@Mapper
public interface StudyLogByBookMapper {
    List<StudyLog> getStudyLogByBook(Integer userId, Integer status) throws Exception;
    List<StudyLog> getStudyLogByBookDays(Integer userId, Integer days, Integer status) throws Exception;
    void updateBookStatus(StudyLog studyLog);
    void insertStudyLog(StudyLog studyLog);
}
