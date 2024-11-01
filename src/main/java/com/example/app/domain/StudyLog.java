package com.example.app.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyLog {
    public Integer userId;
    public Double time;
    public Integer logId;
    public Integer bookId;
    public Integer genreId;
    public String bookName;
    public String author;
    public String genreName;
    public Date date;
    public Integer status;
    public Double sumOfTime;
    public Date lastDate;
    public Integer updateCheck;
    public String comment;
}
