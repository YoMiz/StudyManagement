package com.example.app.util;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.example.app.domain.StudyLog;

public class DateUtils {

    public static List<StudyLog> fillMissingDates(List<StudyLog> studyLogs, int days) {
        if (studyLogs.isEmpty()) {
            return studyLogs;
        }

        List<StudyLog> filledStudyLogs = new ArrayList<>(studyLogs);
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, -days);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        Date startDate = calendar.getTime();
        Date endDate = new Date();

        calendar.setTime(startDate);

        while (!calendar.getTime().after(endDate)) {
            Date currentDate = calendar.getTime();
            boolean dateExists = studyLogs.stream().anyMatch(log -> {
                Calendar logCalendar = Calendar.getInstance();
                logCalendar.setTime(log.getDate());
                logCalendar.set(Calendar.HOUR_OF_DAY, 0);
                logCalendar.set(Calendar.MINUTE, 0);
                logCalendar.set(Calendar.SECOND, 0);
                logCalendar.set(Calendar.MILLISECOND, 0);
                return logCalendar.get(Calendar.YEAR) == calendar.get(Calendar.YEAR) &&
                       logCalendar.get(Calendar.MONTH) == calendar.get(Calendar.MONTH) &&
                       logCalendar.get(Calendar.DAY_OF_MONTH) == calendar.get(Calendar.DAY_OF_MONTH);
            });

            if (!dateExists) {
                StudyLog emptyLog = new StudyLog();
                emptyLog.setDate(currentDate);
                emptyLog.setTime(0.0);
                emptyLog.setSumOfTime(0.0);
                emptyLog.setTotalTime(0.0);
                filledStudyLogs.add(emptyLog);
            }

            calendar.add(Calendar.DATE, 1);
        }

        filledStudyLogs.sort((log1, log2) -> log2.getDate().compareTo(log1.getDate())); // 降順に並べ替え

        return filledStudyLogs;
    }
}
