/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const retakeStud = allStudentsList.filter(name => !studentsForRetake.includes(name));
  
  const result = retakeStud.map(name => "Good job, " + name);
  return result;
  }
  