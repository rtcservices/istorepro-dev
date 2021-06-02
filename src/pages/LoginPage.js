import Login from "../components/Login/Login";

const LoginPage = (props) => {
  return <Login onLogin={props.onLogin} onLocaleChange={props.onLocaleChange}/>;
};

export default LoginPage;
