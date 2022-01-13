import React from "react";
import styles from "../styles/login.module.css";
import LinksComponent from "../atoms/LinksComponent";
import { InputComponent } from "../atoms/InputComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import AccountComponent from "../atoms/AccountComponent";
import CreateAccountComponent from "../atoms/CreateAccountComponent";

function LoginComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <InputComponent
          buttonClass={styles.input}
          type={"text"}
          placeholder={"Email address or phone number"}
        />
        <InputComponent
          buttonClass={styles.input}
          type={"password"}
          placeholder={"Password"}
        />
        <div className={styles.linkbox}></div>
        <ButtonComponent buttonClass={styles.loginBtn}>Login</ButtonComponent>
        <LinksComponent linkClass={styles.link}>
          Forgotten password?
        </LinksComponent>
        <p>Or</p>
        <ButtonComponent buttonClass={styles.createAccountBtn}>
          Create Account
        </ButtonComponent>
      </div>

      <div className={styles.recentLogin}>
        <div className={styles.loginText}>
          <h1 className={styles.headerText}>facebook</h1>
          <h2>Recent Logins</h2>
          <h5>Click your picture or add an account</h5>
        </div>
        <div className={styles.accountBox}>
          <AccountComponent componentClass={styles.account}>
            <p>Francis</p>
          </AccountComponent>
          <CreateAccountComponent />
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
