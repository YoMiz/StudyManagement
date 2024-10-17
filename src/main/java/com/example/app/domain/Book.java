package com.example.app.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
	String bookName;
	String genreName;
	String author;
	Integer genreId;
	Integer bookId;
	Integer userId;
	Date date;
	Double time;
	Integer status;
	String comment;
}
