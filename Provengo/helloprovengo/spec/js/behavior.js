/* @provengo summon selenium */

/**
 * This story creates a new reply comment by student on existing topic in course's forum.
 */
bthread('Reply', function () {
  let s = new SeleniumSession('reply')
  s.start(URL)
})

/**
 * This story hide a forum from student by teacher.
 */
bthread('Hide', function () {
  let s = new SeleniumSession('hide')
  s.start(URL)
})