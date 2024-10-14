package com.example.app.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.app.domain.StudyLog;
@Mapper
public interface StudyLogByGenreMapper {
	 	List<StudyLog> getStudyLogByGenre(Integer userId) throws Exception; 
	    List<StudyLog> getStudyLogByGenreDays(Integer userId, Integer days) throws Exception;
	    List<StudyLog> getAllStudyLogOfAGenre(Integer userId, Integer genreId) throws Exception;
}
