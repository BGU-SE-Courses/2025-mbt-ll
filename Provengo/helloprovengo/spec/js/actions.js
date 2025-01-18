function loginStudent(session,data){
    with(session) {
          click(xpaths.Login.navigateToLogin)
      }
   session.writeText(xpaths.Login.enterUsername, data.Login.adminUsername)
   session.writeText(xpaths.Login.enterPassword, data.Login.password)
   with(session) {
       click(xpaths.Login.loginButton)
   }
}













function composeQuery(session, data) {
  session.writeText(xpaths.searchWindow.searchInput, data.text)
}

function startSearch(session) {
  with(session) {
    click(xpaths.searchWindow.searchButton)
  }
}

function feelLucky(session) {
  with(session) {
    click(xpaths.searchWindow.feelingLuckyButton)
  }
}