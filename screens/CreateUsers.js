import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const CreateUsers = () => {
  //getting the value from the input
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  //update handler
  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        console.log(enteredEmail);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  //creating user

  //submit handler
  //here we are forwarding data
  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <SafeAreaView>
      <Input
        label={"Email"}
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
      />
      <Input
        label="Password"
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure
        value={enteredPassword}
      />
      <Button label={"create"} onPress={submitHandler} />
    </SafeAreaView>
  );
};

export default CreateUsers;
