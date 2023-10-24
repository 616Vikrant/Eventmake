/* Set the background color for the page */
*{
    margin: 0;
    padding: 0;
}
body {
  background-color: #4c5fd5;
  color: #000000;
  font-family: Arial, sans-serif;
  /* color: #dadbf1; */
}

/* Style the navigation bar */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
}

h1 {
    margin: 0;
    font-size: 36px;
    color: #4C5FD5;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

nav li {
    margin-left: 20px;
}

nav a {
    color: #000000;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #4C5FD5;
}
/* Style the add button */
.add-button {
  background-color: #4c5fd5;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
}

.add-button:hover {
    background-color: #ffffff;
    color: #4c5fd5;
  }
/* Style the main content */
main {
  margin-top: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 15vh;
}

/* Style the form */
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Style the form input elements */
.inp-div {
  margin: 10px;
  width: calc(50% - 20px);
}

.inp-div label {
  display: block;
  margin-bottom: 5px;
}

.inp-div input,
.inp-div select,
.inp-div textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: transparent black;
  background-color: #dadbf1;
}

/* .inp-div input:focus,
.inp-div select:focus,
.inp-div textarea:focus {
  outline: none;
  box-shadow: 0px 0px 5px #4c5fd5;
} */

/* Style the submit button */
#post-event-button {
  background-color: #4c5fd5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
}

#post-event-button:hover {
  background-color: #ffffff;
  color: #4c5fd5;
}
