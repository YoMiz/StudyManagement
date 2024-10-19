package com.example.app.mapper.detail;

import org.springframework.web.bind.annotation.GetMapping;

public class DetailLogByBookMapper {
	@GetMapping("/getBookDetailData")
	public String getBookDetailData() throws Exception {
		String dataTypeBook = "BOOK FROM SERVER";
		return dataTypeBook;
	}

}
