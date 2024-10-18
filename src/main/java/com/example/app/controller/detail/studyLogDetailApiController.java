package com.example.app.controller.detail;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class studyLogDetailApiController {

@GetMapping("/getGenreDetailDataList")
public String getGenreDetailData()throws Exception{
	String dataTypeGenre = "GENRE";
	return dataTypeGenre;
}
@GetMapping("/getBookDetailDataList")
public String getBookDetailData()throws Exception{
	String dataTypeBook = "BOOK";
	return dataTypeBook;
}
}
