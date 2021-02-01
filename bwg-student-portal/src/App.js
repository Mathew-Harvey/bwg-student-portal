// Questions:

// if student has a zero returned for a particular class type, app doesn't log in, need error catch??
// passing values to graph, why undefined? How to do
// Associated todo's with email address anmd then load todo's on authenitication





import React, { useState, useEffect } from "react";
import "./App.css";
import fire from "./fire";
import Login from "./login";
import Dashboard from "./dashboard";
import Chart from "./components/charts/Chart"
import sidebar from "./components/sidebar/Sidebar"


const App = () => {
  //LOGIN STUFF
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [sevenDays, setSevenDays] = useState("")
  const [hoursTrained, setHoursTrained] = useState("");
  const [bodyweightClass, setBodyweightClass] = useState("");
  const [mobilityClass, setMobilityClass] = useState("");
  const [caliClass, setCaliClass] = useState("");
  const [begClass, setBegClass] = useState("");
  const [handstandClass, setHandstandClass] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);


  <Dashboard user={user} />;
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {

      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // clearInputs();
        setUser(user);
        console.log(user)
        setEmail(user.email)

        fetch("http://localhost:3001/username/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              setName(data.firstName)
            } else {
              setUser("")
            }
          });
        });
        //total classes attended
        fetch("http://localhost:3001/hourstrained/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              // clearInputs()
              setHoursTrained(data)
            } else {
              setUser(user)
              setHoursTrained(0)
            }
          });
        });
        //total classes attended in the last 7 days
        fetch("http://localhost:3001/sevendays/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              // clearInputs()
              setSevenDays(data)
            } else {
              setUser(user)
              setSevenDays(0)
            }
          });
        });
        //total bodyweight classes attended
        
        fetch("http://localhost:3001/bodyweightClass/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              // clearInputs()
              setBodyweightClass(data)
            } else {
              setUser(user)
              setBegClass(0)
            }
          });
        });


        // total mobility classes attended 
        fetch("http://localhost:3001/mobilityClass/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              // clearInputs()
              setMobilityClass(data)
            } else {
              setUser(user)
              setMobilityClass(0)
            }
          });
        });

        // total beginner bodyweight classes attended 
        fetch("http://localhost:3001/begClass/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              // clearInputs()
              setBegClass(data)
            } else {
              setUser(user)
              setBegClass(0)
            }
          });
        });

        //total cali classes attended 
        fetch("http://localhost:3001/caliClass/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              // clearInputs()
              setCaliClass(data)
            } else {
              setUser(user)
              setCaliClass(0)
            }
          });
        });

        //total handstand classes attended 
        fetch("http://localhost:3001/handstandClass/" + user.email).then((res) => {
          res.json().then((data) => {
            if (data) {
              // clearInputs()
              setHandstandClass(data)
            } else {
              setUser(user)
              setHandstandClass(0)
            }
          });
        });

      } else {
        setUser("");
      }
    });
  };


  useEffect(() => {
    authListener();
  }, []);

  //login screen
console.log(email)
  return (
    <div className="App">
      {user ? ( //if user exists render document 'hero' replace with dash board
        <Dashboard
          handleLogout={handleLogout}
          name={name}
          email={email}
          hoursTrained={hoursTrained}
          bodyweightClass={bodyweightClass}
          sevenDays={sevenDays}
          mobilityClass={mobilityClass}
          caliClass={caliClass}
          begClass={begClass}
          handstandClass={handstandClass}
        />
      ) : (
          // otherwise if use doesn't exist render log in page
          <Login
            email={email}            
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
    </div>
  );
};

export default App;
